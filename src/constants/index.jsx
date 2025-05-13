import { Zap } from "lucide-react";
import { BarChart3 } from "lucide-react";
import { Globe } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { BrainCircuit } from "lucide-react";
import { Blocks } from "lucide-react";

import avatar1 from "../assets/profile-pictures/avatar1.jpg";
import avatar2 from "../assets/profile-pictures/avatar2.jpg";
import avatar3 from "../assets/profile-pictures/avatar3.jpg";
import avatar4 from "../assets/profile-pictures/avatar4.jpg";
import avatar5 from "../assets/profile-pictures/avatar5.jpg";
import avatar6 from "../assets/profile-pictures/avatar6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const testimonials = [
  {
    user: "Sarah Mitchell",
    company: "NovaTech",
    image: avatar1,
    text: "FlowPilot saved us 15+ hours a week and helped reduce manual errors by 80%. Our team can now focus on strategic projects instead of repetitive tasks.",
  },
  {
    user: "John Reynolds",
    company: "BrightBridge",
    image: avatar2,
    text: "We automated our client onboarding and it's been a total game-changer. What used to take days now happens automatically in minutes with zero errors.",
  },
  {
    user: "Maria Garcia",
    company: "Elevate Digital",
    image: avatar3,
    text: "The integration capabilities are impressive. We connected all our tools in one afternoon and had our first workflow running by the end of the day.",
  },
  {
    user: "Kevin Chan",
    company: "Velocity Startups",
    image: avatar4,
    text: "As a startup founder, I wear many hats. FlowPilot has essentially become our operations team, handling everything from lead nurturing to invoice processing automatically.",
  },
  {
    user: "Olivia Thompson",
    company: "GrowthLab",
    image: avatar5,
    text: "The ROI was immediate. Within the first month, we recovered the annual subscription cost in time savings alone. Now our team can focus on creative work that drives real value.",
  },
  {
    user: "Marcus Johnson",
    company: "Nexus Solutions",
    image: avatar6,
    text: "The customer support is exceptional. Whenever we've had questions, the team responds quickly with helpful solutions. It feels like they're genuinely invested in our success.",
  },
];

export const features = [
  {
    icon: <Zap />,
    text: "Drag-and-drop Workflow Builder",
    description:
      "Create powerful automation workflows without writing a single line of code using our intuitive visual editor.",
  },
  {
    icon: <Globe />,
    text: "100+ App Integrations",
    description:
      "Connect with all your favorite tools including Slack, Notion, Google Workspace, Salesforce, and many more.",
  },
  {
    icon: <BarChart3 />,
    text: "Real-Time Analytics",
    description:
      "Monitor performance and identify optimization opportunities with comprehensive workflow analytics.",
  },
  {
    icon: <BrainCircuit />,
    text: "Smart Triggers & Conditions",
    description:
      "Set intelligent conditions and triggers that respond to specific events across your connected apps.",
  },
  {
    icon: <Blocks />,
    text: "Team Collaboration",
    description:
      "Work together seamlessly with role-based permissions, version history, and collaborative editing features.",
  },
  {
    icon: <ShieldCheck />,
    text: "Enterprise-Grade Security",
    description:
      "Rest easy knowing your data and workflows are protected with SOC 2 compliance and end-to-end encryption.",
  },
];

export const workflowSteps = [
  {
    title: "Connect your tools",
    description:
      "Easily integrate apps like Slack, Notion, Google Sheets, and 100+ more with just a few clicks.",
  },
  {
    title: "Design your flow",
    description:
      "Use our no-code visual builder to create automation workflows tailored to your specific needs.",
  },
  {
    title: "Go live",
    description:
      "Launch with confidence and monitor performance in real-time. Optimize as you grow.",
  },
  {
    title: "Scale effortlessly",
    description:
      "Add more workflows and team members as your business grows without hitting technical barriers.",
  },
];

export const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Up to 5 workflows",
      "Community support",
      "Limited integrations",
      "Basic analytics",
    ],
  },
  {
    title: "Pro",
    price: "$29",
    features: [
      "Unlimited workflows",
      "Priority support",
      "All integrations",
      "Advanced analytics",
    ],
  },
  {
    title: "Business",
    price: "$99",
    features: [
      "Everything in Pro",
      "Team features",
      "SLA + Onboarding",
      "Custom integrations",
    ],
  },
];

export const resourceLinks = [
  { href: "#", text: "Documentation" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "Community Forum" },
  { href: "#", text: "Blog" },
];

export const companyLinks = [
  { href: "#", text: "About Us" },
  { href: "#", text: "Careers" },
  { href: "#", text: "Press Kit" },
  { href: "#", text: "Contact" },
  { href: "#", text: "Partners" },
];

export const legalLinks = [
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Terms of Service" },
  { href: "#", text: "Security" },
  { href: "#", text: "GDPR Compliance" },
  { href: "#", text: "Cookie Policy" },
];
