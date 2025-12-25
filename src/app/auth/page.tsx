"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Github, 
  Chrome,
  KeyRound,
  Eye,
  EyeOff,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function AuthPage({ defaultIsLogin = true }: { defaultIsLogin?: boolean }) {
  const [isLogin, setIsLogin] = useState(defaultIsLogin);
  const [showPassword, setShowPassword] = useState(false);

  const toggleAuth = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-slate-50 dark:bg-black relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/20 blur-[120px] rounded-full animate-pulse decoration-3000" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-5xl h-[700px] bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl flex overflow-hidden border border-slate-100 dark:border-white/5"
      >
        {/* Sliding Overlay Panel */}
        <motion.div
            animate={{ x: isLogin ? "100%" : "0%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute top-0 left-0 w-1/2 h-full z-20 hidden lg:block"
        >
            <div className="h-full w-full bg-slate-900 dark:bg-slate-950 p-16 flex flex-col justify-center items-center text-center text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-slate-900/50 to-blue-600/30" />
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_0)] bg-[size:30px_30px]" />
                
                <div className="relative z-10 space-y-10">
                    <div className="space-y-4">
                        <motion.div 
                            key={isLogin ? 'reg' : 'log'}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-4xl font-black italic tracking-tighter"
                        >
                            {isLogin ? "NEW HERE?" : "WELCOME BACK!"}
                        </motion.div>
                        <p className="text-slate-400 font-medium italic text-lg max-w-xs mx-auto">
                            {isLogin 
                                ? "Sign up and start protecting your intellectual interests today." 
                                : "To keep connected with us please login with your personal info."}
                        </p>
                    </div>

                    <Button 
                        onClick={toggleAuth}
                        variant="outline" 
                        className="rounded-full px-12 py-7 border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/50 active:scale-95 transition-all font-black text-xs uppercase tracking-[0.3em]"
                    >
                        {isLogin ? "Register Now" : "Sign In"}
                    </Button>
                </div>
            </div>
        </motion.div>

        {/* Login Form Side */}
        <div className="w-full lg:w-1/2 h-full p-8 md:p-16 flex flex-col justify-center">
            <AnimatePresence mode="wait">
                {isLogin ? (
                    <motion.div
                        key="login"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <Link href="/" className="flex items-center gap-2 group">
                                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
                                <ShieldCheck className="w-6 h-6" />
                                </div>
                                <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic">
                                MENTOR<span className="text-primary italic">IP</span>
                                </span>
                            </Link>
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Sign In</h2>
                            <p className="text-slate-500 font-medium italic">Welcome back! Please enter your details.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <Input placeholder="name@company.com" className="pl-12 h-14 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-white/5 rounded-2xl focus-visible:ring-primary font-bold text-sm" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Password</label>
                                    <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Forgot?</button>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <Input 
                                        type={showPassword ? "text" : "password"} 
                                        placeholder="••••••••" 
                                        className="pl-12 pr-12 h-14 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-white/5 rounded-2xl focus-visible:ring-primary font-bold text-sm" 
                                    />
                                    <button 
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Button className="w-full h-16 rounded-2xl bg-primary font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                            Sign In to Account
                        </Button>

                        <div className="space-y-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center"><Separator className="bg-slate-100 dark:bg-white/5" /></div>
                                <div className="relative flex justify-center text-[10px] uppercase font-black text-slate-400 tracking-widest">
                                    <span className="bg-white dark:bg-slate-900 px-4">Or continue with</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Button variant="outline" className="h-14 rounded-2xl border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-800/50 font-bold gap-2">
                                    <Chrome className="w-5 h-5" /> Google
                                </Button>
                                <Button variant="outline" className="h-14 rounded-2xl border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-800/50 font-bold gap-2">
                                    <Github className="w-5 h-5" /> GitHub
                                </Button>
                            </div>
                        </div>

                        <div className="lg:hidden text-center pt-4">
                            <button onClick={toggleAuth} className="text-sm font-bold text-slate-500 italic hover:text-primary transition-colors">
                                Don't have an account? <span className="font-black text-primary uppercase tracking-wider not-italic">Sign Up</span>
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <div className="hidden lg:block h-full" /> // Placeholder for Register form on left when isLogin is false
                )}
            </AnimatePresence>
        </div>

        {/* Register Form Side (Positioned for when overlay is on left) */}
        <div className="w-full lg:w-1/2 h-full p-8 md:p-16 flex flex-col justify-center">
            <AnimatePresence mode="wait">
                {!isLogin ? (
                    <motion.div
                        key="register"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                             <Badge className="bg-primary/10 dark:bg-primary/20 text-primary border-primary/20 backdrop-blur-md px-3 py-1 uppercase tracking-widest font-black text-[10px] rounded-full">
                                Step into MentorIP <Sparkles className="w-3 h-3 ml-2" />
                            </Badge>
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Register</h2>
                            <p className="text-slate-500 font-medium italic">Join our community of innovators and creators.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">First Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <Input placeholder="John" className="pl-12 h-14 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-white/5 rounded-2xl focus-visible:ring-primary font-bold text-sm" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Last Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <Input placeholder="Doe" className="pl-12 h-14 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-white/5 rounded-2xl focus-visible:ring-primary font-bold text-sm" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <Input placeholder="name@company.com" className="pl-12 h-14 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-white/5 rounded-2xl focus-visible:ring-primary font-bold text-sm" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Choose Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <Input type="password" placeholder="••••••••" className="pl-12 h-14 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-white/5 rounded-2xl focus-visible:ring-primary font-bold text-sm" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Button className="w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all">
                                Create Brand Identity
                            </Button>
                            <p className="text-[10px] text-center font-bold text-slate-400 uppercase tracking-widest">
                                By registering, you agree to our <span className="text-primary hover:underline cursor-pointer">Terms</span> & <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span>.
                            </p>
                        </div>

                        <div className="lg:hidden text-center pt-2">
                            <button onClick={toggleAuth} className="text-sm font-bold text-slate-500 italic hover:text-primary transition-colors">
                                Already have an account? <span className="font-black text-primary uppercase tracking-wider not-italic">Sign In</span>
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <div className="hidden lg:block h-full" />
                )}
            </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

const Separator = ({ className }: { className?: string }) => (
    <div className={`h-[1px] w-full ${className}`} />
);
