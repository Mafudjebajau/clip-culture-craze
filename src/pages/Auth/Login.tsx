
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would validate and authenticate
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white p-4">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold">Log in</h1>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
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
            placeholder="Your password"
            className="bg-gray-900 border-gray-700 text-white"
            required
          />
        </div>

        <div className="text-right">
          <Link to="/auth/forgot-password" className="text-sm text-gray-400 hover:text-white">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full py-6">
          Log in
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-400">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-white hover:underline">
            Sign up
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

export default Login;
