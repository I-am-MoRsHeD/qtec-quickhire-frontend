import React from "react";
import {
  PencilRuler,
  BarChart3,
  Volume2,
  MonitorSmartphone,
  Laptop,
  Code2,
  Briefcase,
  Users2
} from "lucide-react";
import { Category } from "@/interface/category.type";

export const CATEGORIES: Category[] = [
  { title: "Design", jobs: 235, icon: <PencilRuler size={32} /> },
  { title: "Sales", jobs: 756, icon: <BarChart3 size={32} /> },
  { title: "Marketing", jobs: 140, icon: <Volume2 size={32} /> },
  { title: "Finance", jobs: 325, icon: <MonitorSmartphone size={32} /> },
  { title: "Technology", jobs: 436, icon: <Laptop size={32} /> },
  { title: "Engineering", jobs: 542, icon: <Code2 size={32} /> },
  { title: "Business", jobs: 211, icon: <Briefcase size={32} /> },
  { title: "Human Resource", jobs: 346, icon: <Users2 size={32} /> },
];