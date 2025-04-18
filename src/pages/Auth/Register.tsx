
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would create an account
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white p-4">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold">Sign up</h1>
      </div>

      <form onSubmit={handleRegister} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="Choose a username"
            className="bg-gray-900 border-gray-700 text-white"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Your email address"
            className="bg-gray-900 border-gray-700 text-white"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Create a password"
            className="bg-gray-900 border-gray-700 text-white"
            required
          />
          <p className="text-xs text-gray-400">
            Password must be at least 8 characters long
          </p>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm font-normal">
            I agree to the{" "}
            <Link to="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </Label>
        </div>

        <Button type="submit" className="w-full py-6">
          Sign up
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-400">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-white hover:underline">
            Log in
          </Link>
        </p>
      </div>

      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-black text-gray-400">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <Button variant="outline" className="py-6 border-gray-800">
            Google
          </Button>
          <Button variant="outline" className="py-6 border-gray-800">
            Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
