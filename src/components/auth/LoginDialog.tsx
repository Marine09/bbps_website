import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { LockIcon, UserIcon, LogInIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  role: z.string({
    required_error: "Please select a role.",
  }),
});

type LoginFormValues = z.infer<typeof formSchema>;

interface LoginDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const LoginDialog = ({ open = false, onOpenChange }: LoginDialogProps) => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      role: "",
    },
  });

  const [localOpen, setLocalOpen] = useState(open);

  // Update local state when prop changes
  React.useEffect(() => {
    setLocalOpen(open);
  }, [open]);

  const handleOpenChange = (newOpen: boolean) => {
    setLocalOpen(newOpen);
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  const onSubmit = (values: LoginFormValues) => {
    // This would typically handle authentication with a backend service
    console.log("Login attempt:", values);
    // Mock successful login
    alert(`Login successful as ${values.role}`);
    // Close the dialog after successful login
    handleOpenChange(false);
    // Reset form
    form.reset();
  };

  return (
    <Dialog open={localOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <LogInIcon className="h-4 w-4" />
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            School Portal Login
          </DialogTitle>
          <DialogDescription className="text-center">
            Access your personalized dashboard based on your role.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select your role</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="parent">Parent</SelectItem>
                      <SelectItem value="teacher">Teacher</SelectItem>
                      <SelectItem value="administrator">
                        Administrator
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Your role determines what features you can access.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        className="pl-10"
                        placeholder="Enter your username"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <LockIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        className="pl-10"
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between items-center">
              <Button type="button" variant="link" className="px-0">
                Forgot password?
              </Button>
              <Button type="submit">Login</Button>
            </div>
          </form>
        </Form>

        <DialogFooter className="flex flex-col space-y-2 sm:space-y-0">
          <div className="text-sm text-center text-muted-foreground">
            Need help? Contact the IT department at support@schoolname.edu
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
