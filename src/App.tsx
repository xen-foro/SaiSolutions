import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Truck,
  Laptop,
  Calendar,
  AlertTriangle,
  GitPullRequest,
  FileText,
  ClipboardCheck,
  Clock,
  DollarSign,
  ChevronRight,
  Lock,
  Database,
  RefreshCw,
  FileSpreadsheet,
  MailWarning,
  Check,
  Cpu,
  ArrowUpRight,
  Eye,
  X,
  Sliders,
  Zap,
  HeartHandshake,
  Layers,
  PhoneCall
} from 'lucide-react';

// --- CUSTOM FLUENT-STYLE GEOMETRIC "SAI" SVG LOGO ---
function SaiFluentLogo({ size = 44 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-sm"
    >
      <defs>
        <linearGradient id="msAzureGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0078D4" />
          <stop offset="55%" stopColor="#2B88D8" />
          <stop offset="100%" stopColor="#038387" />
        </linearGradient>
        <linearGradient id="powerAppsGrad" x1="8" y1="8" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#742774" />
          <stop offset="100%" stopColor="#0078D4" />
        </linearGradient>
      </defs>
      {/* Outer Fluent Rounded Tile */}
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#msAzureGrad)" />
      <rect x="3" y="3" width="42" height="42" rx="11" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" />
      {/* Overlapping Fluent Power Platform Ribbon Shards */}
      <path
        d="M14 17.5C14 14.4624 16.4624 12 19.5 12H33.5C34.8807 12 36 13.1193 36 14.5C36 15.8807 34.8807 17 33.5 17H19.5C18.6716 17 18 17.6716 18 18.5C18 19.3284 18.6716 20 19.5 20H28.5C32.0899 20 35 22.9101 35 26.5C35 30.0899 32.0899 33 28.5 33H14.5C13.1193 33 12 31.8807 12 30.5C12 29.1193 13.1193 28 14.5 28H28.5C29.3284 28 30 27.3284 30 26.5C30 25.6716 29.3284 25 28.5 25H19.5C16.4624 25 14 22.5376 14 19.5V17.5Z"
        fill="white"
      />
      {/* Power Apps Purple & Power BI Gold Accent Node */}
      <circle cx="35" cy="14.5" r="3.5" fill="#FFB900" />
      <path d="M13 36.5H35" stroke="white" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// --- PORTFOLIO PROJECTS DATA ---
const SOLUTIONS = [
  {
    id: 'fleet',
    badge: 'FLAGSHIP ARCHITECTURE • 3,000+ ASSETS',
    title: 'Enterprise Fleet & Motor Pool Management Suite',
    category: 'Operations & Logistics',
    shortDesc:
      'Battle-tested government-grade reservation, dispatch, and preventative maintenance engine currently managing 3,000+ active vehicles with zero double-bookings.',
    metrics: ['3,000+ Active Vehicles', '0% Double-Booking Rate', '42 hrs/wk Saved'],
    replacedSaaS: 'Fleetio / Geotab / Chevin ($45/vehicle/mo)',
    icon: Truck,
    msColor: '#0078D4', // Azure Blue
    msProductTag: 'Power Apps + SharePoint + Automate',
    features: [
      'Zero-Conflict Algorithmic Booking Engine across multi-site motor pools',
      'Automated Driver License & Safety Disclosure email verification before release',
      'Stage-wise workflow: User Request → Supervisor Approval → Admin Dispatch',
      'Preventative Maintenance, Cost Keeper & Repair Bill Ledger with auto-reminders'
    ],
    mockupType: 'fleet'
  },
  {
    id: 'it-asset',
    badge: 'MOST POPULAR DOOR-OPENER',
    title: 'Enterprise IT Asset Lifecycle & "Day-1 Ready" Suite',
    category: 'IT & Infrastructure',
    shortDesc:
      'End-to-end hardware custody, Entra ID mapped serial tracking, automated Day-1 new-hire provisioning, and zero-leakage offboarding recovery.',
    metrics: ['100% Custody Audit Trail', 'Day-1 Readiness Guaranteed', '$28k/yr Hardware Saved'],
    replacedSaaS: 'ServiceNow ITAM / Snipe-IT / Lansweeper',
    icon: Laptop,
    msColor: '#742774', // Power Apps Purple
    msProductTag: 'Power Apps + Entra ID + SharePoint',
    features: [
      'Real-time Serial, MAC Address & SaaS Seat ledger mapped to Microsoft Entra ID',
      'Role-based "Day-1 Equipment Bundle" ordering & 1-click manager approval',
      'Warranty, AppleCare, Repair Bill & Hardware Depreciation calculator',
      'Automated HR Termination trigger generating instant equipment return checklists'
    ],
    mockupType: 'it-asset'
  },
  {
    id: 'cab-jira',
    badge: 'JIRA & SERVICENOW KILLER',
    title: 'Enterprise Change Management (CAB) & Agile Command Center',
    category: 'IT & Infrastructure',
    shortDesc:
      'Full ITIL-aligned Change Advisory Board voting, rollback governance, and interactive Sprint Kanban boards natively inside SharePoint & Teams.',
    metrics: ['$35,000+/yr SaaS Saved', '100% ITIL Audit Ready', 'Real-Time Teams Voting'],
    replacedSaaS: 'Atlassian Jira / ServiceNow ITSM / Monday.com',
    icon: GitPullRequest,
    msColor: '#038387', // SharePoint Teal
    msProductTag: 'Teams Adaptive Cards + SharePoint + Power BI',
    features: [
      'Structured CAB Governance: Risk scoring, deployment windows & rollback plans',
      'Automated multi-stakeholder CAB voting via Microsoft Teams Adaptive Cards',
      'Interactive JSON-formatted Kanban boards, sprint backlogs & story point tracking',
      'Zero "Per-User Jira Tax" — runs 100% on standard M365 licenses'
    ],
    mockupType: 'cab'
  },
  {
    id: 'leave-hr',
    badge: 'RAPID HR AUTOMATION',
    title: 'Multi-Stage HR Leave & Absence Approval Engine',
    category: 'HR & People Ops',
    shortDesc:
      'Eliminates lost email threads and payroll miscalculations with dynamic multi-tier routing, conflict detection, and live Teams notifications.',
    metrics: ['< 2 Min Approval Time', '100% Payroll Accuracy', '99.2% Staff Adoption'],
    replacedSaaS: 'BambooHR / Workday Leave / Paper Forms',
    icon: Calendar,
    msColor: '#D83B01', // Microsoft Office Orange
    msProductTag: 'Power Automate + Teams + Outlook',
    features: [
      'Dynamic Multi-Tier Routing (Employee → Supervisor → Dept Head → HR)',
      'Instant Microsoft Teams & Email status notifications at every transition stage',
      'Departmental overlap & staffing minimum threshold warning alerts',
      'Executive Leave Balance & Accrual ledger with 1-click CSV payroll export'
    ],
    mockupType: 'leave'
  },
  {
    id: 'incident',
    badge: 'PUBLIC & INTERNAL GOVERNANCE',
    title: 'End-to-End Incident, Complaint & Case Resolution Tracker',
    category: 'Compliance & Legal',
    shortDesc:
      'Frictionless public-facing intake portal paired with a secure, role-based internal investigation command center and fair-process SLA notifications.',
    metrics: ['500+ Workflows Modernized', '24/7 Automated Triage', 'Full Fair-Process Audit'],
    replacedSaaS: 'Zendesk / Salesforce Service Cloud / InfoPath',
    icon: AlertTriangle,
    msColor: '#0078D4',
    msProductTag: 'Microsoft Forms / Power Pages + Power Apps',
    features: [
      'Dual-Interface Architecture: Public intake form + Internal Assignee Command View',
      'Automated Case Assignment & SLA escalation timers for fair-process compliance',
      'Stage-by-stage stakeholder automated email updates from intake to final closure',
      'Role-based SharePoint item-level security ensuring strict confidentiality'
    ],
    mockupType: 'incident'
  },
  {
    id: 'vendor',
    badge: 'FINANCE & PROCUREMENT',
    title: 'Intelligent Vendor Contract Lifecycle & AP Invoice Matrix',
    category: 'Compliance & Legal',
    shortDesc:
      'Stops unwanted SaaS auto-renewals and rogue spend with threshold-based CFO/Legal routing and a 90/60/30-day contract expiration radar.',
    metrics: ['Zero Unwanted Renewals', '3x Faster AP Close', '100% W-9/MSA Compliance'],
    replacedSaaS: 'Ironclad / Coupa / Bill.com',
    icon: FileText,
    msColor: '#742774',
    msProductTag: 'SharePoint Document Vault + Power Automate',
    features: [
      'Dynamic Dollar-Threshold Routing (<$1k Manager, >$5k VP, >$25k Legal & CFO)',
      'Proactive 90/60/30-Day Contract Renewal & Cancellation Alert Radar',
      'Centralized SharePoint Document Vault with automated metadata tagging',
      'Vendor spend variance & committed liability executive Power BI integration'
    ],
    mockupType: 'vendor'
  },
  {
    id: 'field-capa',
    badge: 'MOBILE FIELD OPERATIONS',
    title: 'Mobile Field Inspection, Safety Audit & Automated CAPA Engine',
    category: 'Operations & Logistics',
    shortDesc:
      'Offline-capable mobile Canvas app for site inspections with photo/GPS capture and instant Corrective Action (CAPA) ticket generation.',
    metrics: ['Mobile & Tablet Ready', 'Instant CAPA Dispatch', 'OSHA / ISO Audit Ready'],
    replacedSaaS: 'SafetyCulture (iAuditor) / Fulcrum',
    icon: ClipboardCheck,
    msColor: '#107C41', // Excel/Compliance Green
    msProductTag: 'Power Apps Mobile + SharePoint + PDF Engine',
    features: [
      'Touch-optimized Mobile Canvas App with photo capture, GPS stamp & digital signatures',
      'Conditional Logic: Any "Failed" inspection item auto-spawns a supervisor CAPA ticket',
      'Mandatory photographic proof-of-repair required before ticket closure',
      'Automated PDF compliance report generation archived directly to SharePoint'
    ],
    mockupType: 'field'
  }
];

const TIMELINE_STEPS = [
  {
    days: 'Days 1 – 3',
    title: 'Architecture Blueprint & Native Schema Provisioning',
    desc: 'We connect directly inside your existing Microsoft 365 tenant. No external servers or third-party cloud risk. We deploy our battle-tested SharePoint lists, Dataverse schemas, and role-based security groups.',
    deliverable: 'Secured Data Architecture & Tenant Readiness Sign-Off'
  },
  {
    days: 'Days 4 – 8',
    title: 'UI Tailoring & Multi-Stage Workflow Binding',
    desc: 'We customize our pre-built Canvas/Model-Driven accelerator to match your corporate branding, bind your Entra ID (Azure AD) approval hierarchies, and configure automated Microsoft Teams & email notifications.',
    deliverable: 'Interactive Staging App & Automated Power Automate Flows'
  },
  {
    days: 'Days 9 – 11',
    title: 'User Acceptance Testing (UAT) & Governance Audit',
    desc: 'Your department leads test real-world scenarios—booking assets, approving invoices, or routing incidents. We fine-tune UI friction points so the interface feels effortless for non-technical staff.',
    deliverable: 'UAT Verification & Zero-Conflict Stress Test'
  },
  {
    days: 'Days 12 – 14',
    title: 'Instant Go-Live, Documentation & High-Adoption Handoff',
    desc: 'Production cutover with zero downtime. We provide bite-sized video training guides and admin documentation. Because our UI is built for human simplicity, organizations average 98%+ adoption in Week 1.',
    deliverable: 'Full Production Ownership & $0 Recurring SaaS Bill'
  }
];

const CERTIFICATIONS = [
  { code: 'PL-200', title: 'Microsoft Certified: Power Platform Functional Consultant Associate', org: 'Microsoft', color: 'bg-[#742774]/10 text-[#742774] border-[#742774]/25' },
  { code: 'PL-300', title: 'Microsoft Certified: Power BI Data Analyst Associate', org: 'Microsoft', color: 'bg-amber-500/15 text-amber-800 border-amber-500/30' },
  { code: 'PL-900', title: 'Microsoft Certified: Power Platform Fundamentals', org: 'Microsoft', color: 'bg-[#0078D4]/10 text-[#0078D4] border-[#0078D4]/25' },
  { code: 'MS-900', title: 'Microsoft 365 Certified: Enterprise Fundamentals', org: 'Microsoft', color: 'bg-[#038387]/10 text-[#038387] border-[#038387]/25' },
  { code: 'AWS-MLS', title: 'AWS Certified Machine Learning – Specialty', org: 'Amazon Web Services', color: 'bg-slate-200 text-slate-800 border-slate-300' }
];

export default function App() {
  // Interactive States
  const [transformMode, setTransformMode] = useState('after'); // 'before' | 'after'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(SOLUTIONS[0]);
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);

  // Interactive Mockup Internal States
  const [mockFilterStatus, setMockFilterStatus] = useState('All');
  const [mockApprovedIds, setMockApprovedIds] = useState([]);

  // ROI Calculator States
  const [empCount, setEmpCount] = useState(180);
  const [vehicleCount, setVehicleCount] = useState(75);
  const [paperHoursWeekly, setPaperHoursWeekly] = useState(35);
  const [replacedTools, setReplacedTools] = useState({
    jira: true,
    fleetio: true,
    itAsset: true,
    hrLeave: false
  });

  // Lead Capture Modal State
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [pilotForm, setPilotForm] = useState({
    name: '',
    email: '',
    company: '',
    empSize: '75 - 350 Employees (Sweet Spot)',
    targetApp: 'Enterprise IT Asset Lifecycle & "Day-1 Ready" Suite',
    notes: ''
  });
  const [pilotSubmitted, setPilotSubmitted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Filtered Projects
  const categories = ['All', 'Operations & Logistics', 'IT & Infrastructure', 'HR & People Ops', 'Compliance & Legal'];
  const filteredSolutions = useMemo(() => {
    if (selectedCategory === 'All') return SOLUTIONS;
    return SOLUTIONS.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  // Dynamic ROI Calculation
  const roiMetrics = useMemo(() => {
    let annualSaaSSaved = 0;
    let monthlyHoursSaved = Math.round(paperHoursWeekly * 4.33 * 0.85);

    if (replacedTools.jira) {
      annualSaaSSaved += empCount * 16 * 12;
      monthlyHoursSaved += Math.round(empCount * 0.25);
    }
    if (replacedTools.fleetio) {
      annualSaaSSaved += vehicleCount * 42 * 12;
      monthlyHoursSaved += Math.round(vehicleCount * 0.6);
    }
    if (replacedTools.itAsset) {
      annualSaaSSaved += empCount * 8 * 12 + 8500;
      monthlyHoursSaved += 28;
    }
    if (replacedTools.hrLeave) {
      annualSaaSSaved += empCount * 6 * 12;
      monthlyHoursSaved += 20;
    }

    const annualLaborValueReclaimed = Math.round(monthlyHoursSaved * 12 * 45);

    return {
      annualSaaSSaved,
      annualLaborValueReclaimed,
      totalAnnualImpact: annualSaaSSaved + annualLaborValueReclaimed,
      threeYearSaved: (annualSaaSSaved + annualLaborValueReclaimed) * 3,
      monthlyHoursSaved,
      fteEquivalent: (monthlyHoursSaved / 160).toFixed(1)
    };
  }, [empCount, vehicleCount, paperHoursWeekly, replacedTools]);

  const handleApproveMockItem = (id) => {
    if (!mockApprovedIds.includes(id)) {
      setMockApprovedIds([...mockApprovedIds, id]);
    }
  };

  const handlePilotSubmit = (e) => {
    e.preventDefault();
    setPilotSubmitted(true);
  };

  const handleCopyBrief = () => {
    const summaryText = `SAI | Social AI Solutions — Turnkey M365 Pilot Brief
Organization: ${pilotForm.company || 'Prospective Client'} (${pilotForm.empSize})
Target System: ${pilotForm.targetApp}
Estimated Annual SaaS & Productivity Savings: $${roiMetrics.totalAnnualImpact.toLocaleString()}/yr
Deployment Model: 14-Day Native M365 Turnkey Rollout ($0 Third-Party Licensing)
Principal Architect: Sai Sudhamsh Kamisetty | Social AI Solutions (SAI)`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(summaryText);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#0078D4] selection:text-white">
      {/* MICROSOFT FLUENT TOP RIBBON BANNER */}
      <div className="bg-gradient-to-r from-[#0078D4] via-[#106EBE] to-[#742774] text-white px-4 py-2.5 text-xs sm:text-sm shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white text-[#0078D4] shadow-sm">
              ★ SAI Q4 ADOPTION GRANT
            </span>
            <span className="text-white/95 font-medium">
              <strong>Social AI Solutions (SAI)</strong> is sponsoring <strong>3 organizations</strong> with a waived-fee turnkey Power Platform deployment to showcase instant paper-to-digital ROI.
            </span>
          </div>
          <button
            onClick={() => {
              setPilotSubmitted(false);
              setIsPilotModalOpen(true);
            }}
            className="px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 border border-white/40 text-white font-bold inline-flex items-center gap-1.5 whitespace-nowrap transition shadow-sm"
          >
            <span>Claim Waived-Fee Pilot</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* SPACIOUS, UNCLUTTERED MICROSOFT FLUENT STICKY HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/95 border-b border-slate-200/90 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between gap-4">
          {/* LEFT: CUSTOM SVG LOGO + CLEAR BRAND HIERARCHY */}
          <a href="#top" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="p-1 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/80 shadow-sm group-hover:shadow-md transition">
              <SaiFluentLogo size={42} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  SAI
                </span>
                <span className="text-slate-300 font-light text-lg">|</span>
                <span className="font-bold text-base sm:text-lg text-[#0078D4] tracking-tight">
                  Social AI Solutions
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wide">
                Microsoft 365 & Power Platform Turnkey Practice
              </span>
            </div>
          </a>

          {/* CENTER: WELL-SPACED PILL NAVIGATION CONTAINER */}
          <nav className="hidden xl:flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/90 shadow-inner">
            {[
              { href: '#story', label: '3-Year Story' },
              { href: '#transformation', label: 'Paper-to-System' },
              { href: '#solutions', label: '7 Turnkey Apps' },
              { href: '#roi', label: 'SaaS ROI Calculator' },
              { href: '#process', label: '14-Day Rollout' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-[#0078D4] hover:bg-white hover:shadow-sm transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* RIGHT: FRAMED, DISTINGUISHED ACTION BUTTONS */}
          <div className="flex items-center gap-3">
            <a
              href="#solutions"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-blue-50/60 text-slate-800 hover:text-[#0078D4] font-bold text-xs border-2 border-slate-200 hover:border-[#0078D4]/40 shadow-sm transition"
            >
              <Eye className="w-4 h-4 text-[#0078D4]" />
              <span>Live Simulators</span>
            </a>

            {/* Framed Primary CTA Button with Outer Ring */}
            <div className="p-1 rounded-2xl bg-gradient-to-r from-[#0078D4]/20 via-[#742774]/20 to-[#038387]/20 border border-[#0078D4]/30 shadow-sm">
              <button
                onClick={() => {
                  setPilotSubmitted(false);
                  setIsPilotModalOpen(true);
                }}
                className="px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0078D4] to-[#005A9E] hover:from-[#106EBE] hover:to-[#004578] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition flex items-center gap-2 border border-white/25"
              >
                <span>Claim Free Pilot</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 1. BRIGHT MICROSOFT FLUENT HERO SECTION */}
      <section
        id="top"
        className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#F0F6FF] via-white to-[#F8FAFC] border-b border-slate-200"
      >
        {/* Soft Microsoft Fluent Background Accents */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[950px] h-[420px] bg-gradient-to-r from-[#0078D4]/10 via-[#742774]/10 to-[#038387]/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Framed Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border-2 border-blue-200 shadow-sm text-[#0078D4] text-xs font-bold mb-7">
              <span className="w-2 h-2 rounded-full bg-[#0078D4] animate-pulse" />
              <span>SAI | Social AI Solutions • 3+ Years Engineering Enterprise & Public-Sector M365 Systems</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
              Transform Paper & Excel Chaos into{' '}
              <span className="bg-gradient-to-r from-[#0078D4] via-[#742774] to-[#038387] bg-clip-text text-transparent">
                Instant Microsoft 365 Apps.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
              At <strong className="text-slate-900">Social AI Solutions (SAI)</strong>, our priority is your team’s velocity—not expensive consulting bloat. We deploy battle-tested, human-friendly{' '}
              <span className="text-[#0078D4] font-semibold">Power Apps, SharePoint & Power Automate</span> solutions directly inside your existing Microsoft tenant in{' '}
              <span className="underline decoration-[#0078D4] decoration-2 underline-offset-4 font-semibold text-slate-900">
                14 days flat
              </span>
              —with smooth onboarding and zero recurring third-party SaaS fees.
            </p>

            {/* Clearly Distinguished Framed Hero Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <div className="p-1.5 rounded-2xl bg-blue-100/80 border border-blue-300 shadow-md w-full sm:w-auto">
                <button
                  onClick={() => {
                    setPilotSubmitted(false);
                    setIsPilotModalOpen(true);
                  }}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0078D4] to-[#005A9E] hover:from-[#106EBE] hover:to-[#004578] text-white font-extrabold text-base shadow-lg shadow-blue-600/25 border border-white/20 transition flex items-center justify-center gap-2.5"
                >
                  <span>Start Waived-Fee Pilot Deployment</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="p-1.5 rounded-2xl bg-slate-100 border border-slate-300/90 shadow-sm w-full sm:w-auto">
                <a
                  href="#solutions"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0078D4] font-bold text-base border border-slate-200 transition flex items-center justify-center gap-2.5"
                >
                  <Eye className="w-5 h-5 text-[#742774]" />
                  <span>Explore 7 Live Power App Simulators</span>
                </a>
              </div>
            </div>
          </div>

          {/* MICROSOFT FLUENT METRICS CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              { value: '3+ Years', label: 'Proven Track Record', sub: 'Enterprise & Gov Scale', accent: 'border-t-4 border-t-[#0078D4]' },
              { value: '3,000+', label: 'Active Fleet & IT Assets', sub: 'Managed in Real Time', accent: 'border-t-4 border-t-[#742774]' },
              { value: '500+', label: 'Paper & Legacy Flows', sub: 'Digitized to Low-Code', accent: 'border-t-4 border-t-[#038387]' },
              { value: '98.4%', label: 'User Adoption Rate', sub: 'Zero-Learning-Curve UI', accent: 'border-t-4 border-t-amber-500' },
              { value: '$0 / mo', label: '3rd-Party SaaS Tax', sub: '100% Native M365', accent: 'border-t-4 border-t-emerald-600' }
            ].map((stat, i) => (
              <div
                key={i}
                className={`p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition ${stat.accent}`}
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">{stat.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. THE 3-YEAR STORY & CUSTOMER-FIRST PHILOSOPHY */}
      <section id="story" className="py-20 lg:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#742774] text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" /> The SAI Story & Customer-First Vision
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                3 Years in the Works. <br />
                <span className="text-[#0078D4]">Built for Rapid Client Adoption, Not Consulting Bloat.</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                <strong className="text-slate-900">Social AI Solutions (SAI)</strong> was founded on a direct realization over three years of engineering high-volume enterprise systems: organizations already pay Microsoft thousands of dollars a year for M365 licenses, yet their teams still waste hours on{' '}
                <strong className="text-slate-900">paper clipboards, fragile Excel spreadsheets, and $40,000/year third-party SaaS subscriptions.</strong>
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Traditional agencies treat low-code like slow custom software—charging massive retainers for cluttered interfaces employees avoid using. At <strong className="text-slate-900">SAI</strong>, our priority is acquiring and empowering long-term client relationships by deploying pre-engineered, effortless-UI systems at a fraction of traditional cost.
              </p>

              {/* Founder Quote Callout Box */}
              <div className="p-6 rounded-2xl bg-[#F0F6FF] border-2 border-[#0078D4]/25 shadow-sm space-y-2.5">
                <div className="text-xs font-extrabold text-[#0078D4] uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> The Social AI Solutions (SAI) Mandate
                </div>
                <p className="text-sm text-slate-800 leading-relaxed font-medium italic">
                  “Our obsession is the end-user experience—instant onboarding, clean interfaces that require zero training, and immediate cost reduction. Because our architectures already manage 3,000+ fleet vehicles and 500+ digitized workflows, we deploy into your tenant in 14 days flat.”
                </p>
                <div className="pt-1 text-xs text-slate-600 font-bold">
                  — Sai Sudhamsh Kamisetty, Founder & Principal Architect | Social AI Solutions (SAI)
                </div>
              </div>
            </div>

            {/* 3-YEAR MILESTONE TIMELINE CARDS */}
            <div className="lg:col-span-6 space-y-4">
              {[
                {
                  year: 'YEAR 1 • PAPER-TO-DIGITAL FOUNDATION',
                  title: 'Eliminating 500+ Legacy Paper & InfoPath Bottlenecks',
                  desc: 'Engineered rapid paper-to-system migration frameworks converting manual forms, email chains, and legacy InfoPath workflows into responsive SharePoint & Power Automate engines.',
                  stat: '500+ Manual Workflows Digitized',
                  badgeColor: 'bg-blue-50 text-[#0078D4] border-blue-200'
                },
                {
                  year: 'YEAR 2 • ENTERPRISE SCALE ARCHITECTURE',
                  title: 'Scaling the 3,000+ Vehicle Motor Pool & Dispatch Engine',
                  desc: 'Architected a high-concurrency reservation, driver license verification, stage-wise admin assignment, and maintenance cost tracker handling 3,000+ vehicles with zero double-bookings.',
                  stat: '3,000+ Active Assets Managed',
                  badgeColor: 'bg-purple-50 text-[#742774] border-purple-200'
                },
                {
                  year: 'YEAR 3 • SOCIAL AI SOLUTIONS (SAI) GLOBAL SUITE',
                  title: '7 Turnkey Low-Code & AI Accelerators for Instant Rollout',
                  desc: 'Packaged our 3 years of battle-tested architectures into 14-day plug-and-play suites for IT Day-1 Provisioning, Jira-replacing CAB boards, HR Leave, and Mobile Field CAPA.',
                  stat: '98.4% Staff Adoption Rate',
                  badgeColor: 'bg-teal-50 text-[#038387] border-teal-200'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border-2 border-slate-200/90 hover:border-[#0078D4] shadow-sm hover:shadow-md transition"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-lg border ${item.badgeColor}`}>
                      {item.year}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {item.stat}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE PAPER-TO-DIGITAL TRANSFORMATION ENGINE */}
      <section id="transformation" className="py-20 lg:py-24 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0078D4] text-xs font-bold uppercase tracking-wider mb-3">
              <RefreshCw className="w-3.5 h-3.5" /> Interactive Transformation Engine
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialists in Transforming Paper Processes into Seamless Systems
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Click below to compare the legacy paper/spreadsheet bottleneck against a native <strong className="text-slate-900">SAI Microsoft 365 Low-Code System</strong>.
            </p>

            {/* Framed Interactive Toggle Switch */}
            <div className="mt-8 inline-flex p-2 rounded-2xl bg-white border-2 border-slate-200 shadow-md gap-2">
              <button
                onClick={() => setTransformMode('before')}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 border ${
                  transformMode === 'before'
                    ? 'bg-rose-600 text-white border-rose-700 shadow-md shadow-rose-500/20'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <XCircle className="w-4 h-4" />
                <span>Before SAI: Paper, Excel & Costly SaaS</span>
              </button>
              <button
                onClick={() => setTransformMode('after')}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 border ${
                  transformMode === 'after'
                    ? 'bg-[#0078D4] text-white border-[#005A9E] shadow-md shadow-blue-500/25'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>After SAI: Instant M365 Low-Code System</span>
              </button>
            </div>
          </div>

          {/* Dynamic Comparison Cards */}
          {transformMode === 'before' ? (
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="p-6 rounded-2xl bg-white border-2 border-rose-200 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">1. Fragile Spreadsheets & Paper Forms</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Staff fill out paper clipboards or edit shared Excel files. Formulas break, double-bookings happen daily, and there is zero role-based security.
                </p>
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-mono text-rose-800 font-semibold">
                  ! ERROR: Fleet_Tracker_FINAL_v14.xlsx is locked by another user.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border-2 border-rose-200 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                  <MailWarning className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">2. Buried Email Chains & Zero Tracking</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Leave requests, complaints, and vehicle approvals get lost in supervisor inboxes. Employees constantly ask HR or IT for status updates.
                </p>
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-mono text-rose-800 font-semibold">
                  ! RE: FW: URGENT — Did anyone approve the new hire laptop yet??
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border-2 border-rose-200 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">3. $35,000+/yr Third-Party SaaS Tax</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To escape spreadsheets, teams get locked into expensive per-seat tools like Jira, Fleetio, or ServiceNow—paying twice while M365 sits unused.
                </p>
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-mono text-rose-800 font-semibold">
                  ! INVOICE: Annual SaaS Renewal — $38,400.00 (Auto-Billed)
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="p-6 rounded-2xl bg-white border-2 border-[#0078D4]/40 shadow-md space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0078D4]">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">1. Intuitive Power Apps Interface</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Employees launch a clean desktop or mobile app inside Microsoft Teams. Forms auto-detect their Entra ID profile, verify licenses, and block conflicts.
                </p>
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 font-semibold">
                  ✓ Verified: License uploaded & zero double-booking confirmed.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border-2 border-[#742774]/40 shadow-md space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#742774]">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">2. Automated Stage-Wise Workflows</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Power Automate routes approvals from User → Supervisor → Admin with 1-click Teams Adaptive Cards and real-time email progress notifications.
                </p>
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 font-semibold">
                  ✓ Stage 2 Approved in Teams → Assigned to Admin Dispatch.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border-2 border-[#038387]/40 shadow-md space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#038387]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">3. 100% Native SharePoint & $0 SaaS</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  All data, maintenance bills, and audit logs live securely inside your existing SharePoint Online tenant with zero monthly third-party licensing costs.
                </p>
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 font-semibold">
                  ✓ Recurring Third-Party SaaS Fee: $0.00 | 100% M365 Native
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. INTERACTIVE 7 TURNKEY SOLUTIONS PORTFOLIO + LIGHT-MODE POWER APP SIMULATOR */}
      <section id="solutions" className="py-20 lg:py-28 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#742774] text-xs font-bold uppercase tracking-wider mb-3">
                <Database className="w-3.5 h-3.5" /> Pre-Engineered Product Catalog
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                7 Turnkey Microsoft 365 Suites. Ready in 14 Days.
              </h2>
              <p className="text-slate-600 mt-2 max-w-2xl text-base">
                Click any solution on the left to inspect its features and test-drive its live interactive Power App UI simulator on the right.
              </p>
            </div>

            {/* Well-Framed Category Filter Pills */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition border ${
                    selectedCategory === cat
                      ? 'bg-[#0078D4] text-white border-[#005A9E] shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200/80 hover:border-[#0078D4]/40 hover:text-[#0078D4]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* MASTER-DETAIL SPLIT VIEW */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: 7 Solutions Selector Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              {filteredSolutions.map((item) => {
                const IconComponent = item.icon;
                const isSelected = activeProject.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveProject(item);
                      setMockFilterStatus('All');
                    }}
                    className={`cursor-pointer p-5 rounded-2xl transition border-2 text-left ${
                      isSelected
                        ? 'bg-[#F0F6FF] border-[#0078D4] shadow-md'
                        : 'bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50/70 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        <div
                          style={{ backgroundColor: item.msColor }}
                          className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm border border-black/10"
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white text-[#0078D4] border border-blue-200 font-bold">
                            {item.badge}
                          </span>
                          <h3 className="text-base font-extrabold text-slate-900 mt-1 leading-snug">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition ${
                          isSelected
                            ? 'bg-[#0078D4] text-white border-[#005A9E]'
                            : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                      {item.shortDesc}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mt-3.5 pt-3 border-t border-slate-200/80">
                      {item.metrics.map((m, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200"
                        >
                          ✓ {m}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Sticky Light-Mode Microsoft Power Apps Studio Simulator */}
            <div className="lg:col-span-7 lg:sticky lg:top-28 rounded-3xl bg-white border-2 border-slate-300 shadow-xl overflow-hidden">
              {/* Microsoft 365 App Suite Top Bar */}
              <div className="bg-gradient-to-r from-[#0078D4] via-[#106EBE] to-[#742774] px-5 py-3.5 text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="grid grid-cols-3 gap-0.5 p-1 rounded bg-white/15">
                    {[...Array(9)].map((_, idx) => (
                      <span key={idx} className="w-1 h-1 rounded-full bg-white" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-tight truncate">
                    Microsoft Power Apps • {activeProject.title}
                  </span>
                </div>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white text-[#0078D4] shadow-sm shrink-0">
                  ● Live Interactive UI
                </span>
              </div>

              {/* Architecture & Framed CTA Header inside Simulator */}
              <div className="p-6 border-b border-slate-200 bg-[#F8FAFC]">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-bold text-[#742774] uppercase tracking-wider">
                      Native Stack: {activeProject.msProductTag}
                    </div>
                    <div className="text-xs text-slate-600">
                      Replaces Paid SaaS: <strong className="text-slate-900">{activeProject.replacedSaaS}</strong>
                    </div>
                  </div>

                  {/* Framed Button inside Simulator */}
                  <div className="p-1 rounded-xl bg-blue-100 border border-blue-300">
                    <button
                      onClick={() => {
                        setPilotForm({ ...pilotForm, targetApp: activeProject.title });
                        setPilotSubmitted(false);
                        setIsPilotModalOpen(true);
                      }}
                      className="text-xs font-extrabold px-4 py-2 rounded-lg bg-[#0078D4] hover:bg-[#005A9E] text-white shadow-sm transition flex items-center gap-1.5"
                    >
                      <span>Deploy This App Free (Pilot Grant)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-2.5">
                  {activeProject.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0078D4] shrink-0 mt-0.5" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* INTERACTIVE SIMULATED CANVAS APP WORKSPACE */}
              <div className="p-6 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-200">
                  <div>
                    <div className="text-[11px] font-bold text-[#038387] uppercase tracking-wider">
                      Interactive Canvas Preview — Click Action Buttons Below to Test Workflow
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900 mt-0.5">
                      {activeProject.id === 'fleet' && 'Motor Pool Command View: 3,000+ Vehicles, Maintenance & Bills Keeper'}
                      {activeProject.id === 'it-asset' && 'Entra ID Hardware Custody & "Day-1 Ready" Provisioning Queue'}
                      {activeProject.id === 'cab-jira' && 'ITIL Change Advisory Board (CAB) & Agile Sprint Kanban'}
                      {activeProject.id === 'leave-hr' && 'Multi-Tier Employee Leave & Conflict-Free Approval Queue'}
                      {activeProject.id === 'incident' && 'Public Intake & Fair-Process Investigation Command Center'}
                      {activeProject.id === 'vendor' && 'Threshold-Routed Vendor Contracts & 90-Day Renewal Radar'}
                      {activeProject.id === 'field-capa' && 'Mobile Safety Inspection & Auto-CAPA Remediation Queue'}
                    </h4>
                  </div>

                  {/* Framed Status Filter Pills */}
                  <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start">
                    {['All', 'Pending Action', 'Verified'].map((st) => (
                      <button
                        key={st}
                        onClick={() => setMockFilterStatus(st)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                          mockFilterStatus === st
                            ? 'bg-white text-[#0078D4] shadow-xs border border-slate-200/80'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Interactive App Rows */}
                <div className="space-y-3">
                  {getMockRecordsForProject(activeProject.id)
                    .filter((r) => {
                      const isDone = mockApprovedIds.includes(r.id) || r.status === 'Verified';
                      if (mockFilterStatus === 'Pending Action') return !isDone;
                      if (mockFilterStatus === 'Verified') return isDone;
                      return true;
                    })
                    .map((row) => {
                      const isApproved = mockApprovedIds.includes(row.id) || row.status === 'Verified';
                      return (
                        <div
                          key={row.id}
                          className="p-4 rounded-2xl bg-[#F8FAFC] border-2 border-slate-200/90 hover:border-[#0078D4]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 transition shadow-2xs"
                        >
                          <div className="space-y-1.5">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-xs font-mono font-extrabold px-2 py-0.5 rounded bg-blue-50 text-[#0078D4] border border-blue-200">
                                {row.code}
                              </span>
                              <span className="text-sm font-extrabold text-slate-900">{row.title}</span>
                              <span
                                className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold border ${
                                  isApproved
                                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                    : 'bg-amber-50 text-amber-800 border-amber-300'
                                }`}
                              >
                                {isApproved ? '✓ Approved & Notified via Teams/Mail' : row.stage}
                              </span>
                            </div>
                            <div className="text-xs text-slate-600 flex flex-wrap items-center gap-2.5 font-medium">
                              <span>{row.meta1}</span>
                              <span className="text-slate-300">•</span>
                              <span>{row.meta2}</span>
                              <span className="text-slate-300">•</span>
                              <span className="text-[#0078D4] font-bold">{row.costOrSla}</span>
                            </div>
                          </div>

                          {/* Clearly Framed Interactive Action Button */}
                          <div className="flex items-center gap-2 shrink-0">
                            {isApproved ? (
                              <div className="p-1 rounded-xl bg-emerald-100/70 border border-emerald-300">
                                <span className="px-3.5 py-1.5 rounded-lg bg-white text-emerald-800 text-xs font-extrabold flex items-center gap-1.5 shadow-2xs">
                                  <Check className="w-4 h-4 text-emerald-600" /> Synced to SharePoint
                                </span>
                              </div>
                            ) : (
                              <div className="p-1 rounded-xl bg-blue-100/90 border border-blue-300 shadow-2xs">
                                <button
                                  onClick={() => handleApproveMockItem(row.id)}
                                  className="px-3.5 py-1.5 rounded-lg bg-[#0078D4] hover:bg-[#005A9E] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5"
                                >
                                  <span>{row.actionLabel}</span>
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>

                {/* Bottom Status Bar inside Mock App */}
                <div className="mt-5 pt-3.5 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 font-semibold">
                  <span>DATA BACKEND: SharePoint Online + Microsoft Graph API</span>
                  <span className="text-emerald-700 font-bold">
                    ✓ ADDITIONAL LICENSE COST: $0.00 / user
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE SAAS COST-SAVINGS & ROI CALCULATOR */}
      <section id="roi" className="py-20 lg:py-28 border-b border-slate-200 bg-[#F0F6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Sliders & Tool Checkboxes */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-[#0078D4] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
                  <Sliders className="w-3.5 h-3.5" /> Interactive CFO / CIO Cost-Reduction Calculator
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  See How Much Your Existing Microsoft 365 Tenant Can Save You
                </h2>
                <p className="text-slate-600 mt-2 text-base">
                  Adjust your headcount, fleet size, and weekly paper/Excel hours to calculate your immediate annual savings with <strong className="text-slate-900">Social AI Solutions (SAI)</strong>.
                </p>
              </div>

              {/* Sliders Card */}
              <div className="space-y-6 p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-sm">
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-slate-800">Organization Size (Microsoft 365 Users)</span>
                    <span className="px-3 py-0.5 rounded-lg bg-blue-50 text-[#0078D4] border border-blue-200 font-mono text-sm">
                      {empCount} Employees
                    </span>
                  </div>
                  <input
                    type="range"
                    min={30}
                    max={1000}
                    step={10}
                    value={empCount}
                    onChange={(e) => setEmpCount(Number(e.target.value))}
                    className="w-full accent-[#0078D4] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-semibold text-slate-500 mt-1">
                    <span>30 Staff</span>
                    <span>250 (Sweet Spot)</span>
                    <span>1,000+ Enterprise</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-slate-800">Active Fleet Vehicles / Managed Equipment</span>
                    <span className="px-3 py-0.5 rounded-lg bg-purple-50 text-[#742774] border border-purple-200 font-mono text-sm">
                      {vehicleCount} Assets
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={3000}
                    step={25}
                    value={vehicleCount}
                    onChange={(e) => setVehicleCount(Number(e.target.value))}
                    className="w-full accent-[#742774] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-semibold text-slate-500 mt-1">
                    <span>0 Vehicles</span>
                    <span>500 Regional Fleet</span>
                    <span>3,000+ Gov/Enterprise Fleet</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-slate-800">Manual Paper / Excel Hours Spent Weekly</span>
                    <span className="px-3 py-0.5 rounded-lg bg-teal-50 text-[#038387] border border-teal-200 font-mono text-sm">
                      {paperHoursWeekly} hrs / wk
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={150}
                    step={5}
                    value={paperHoursWeekly}
                    onChange={(e) => setPaperHoursWeekly(Number(e.target.value))}
                    className="w-full accent-[#038387] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-semibold text-slate-500 mt-1">
                    <span>5 hrs/wk</span>
                    <span>40 hrs/wk (1 Full-Time Role)</span>
                    <span>150 hrs/wk Multi-Dept</span>
                  </div>
                </div>
              </div>

              {/* Framed Checkboxes for Replaced Systems */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                {[
                  {
                    key: 'itAsset',
                    label: 'Replace IT Asset & Day-1 Spreadsheets',
                    sub: 'Stops lost laptops & $8/user ITAM SaaS'
                  },
                  {
                    key: 'jira',
                    label: 'Replace Jira / Monday / ServiceNow CAB',
                    sub: 'Saves ~$16/user/mo in project & CAB fees'
                  },
                  {
                    key: 'fleetio',
                    label: 'Replace Per-Vehicle Fleet SaaS',
                    sub: 'Saves ~$42/vehicle/mo + paper logbooks'
                  },
                  {
                    key: 'hrLeave',
                    label: 'Replace HR Leave & Incident Add-Ons',
                    sub: 'Saves ~$6/user/mo + manual email routing'
                  }
                ].map((box) => (
                  <button
                    key={box.key}
                    type="button"
                    onClick={() =>
                      setReplacedTools({ ...replacedTools, [box.key]: !replacedTools[box.key] })
                    }
                    className={`p-4 rounded-2xl border-2 text-left transition flex items-start gap-3 shadow-2xs ${
                      replacedTools[box.key]
                        ? 'bg-white border-[#0078D4] text-slate-900 shadow-sm'
                        : 'bg-white/60 border-slate-200 text-slate-500 hover:bg-white'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 shrink-0 border ${
                        replacedTools[box.key]
                          ? 'bg-[#0078D4] text-white border-[#005A9E]'
                          : 'bg-slate-100 border-slate-300'
                      }`}
                    >
                      {replacedTools[box.key] && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <div className="text-xs font-extrabold">{box.label}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{box.sub}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Microsoft Fluent Executive ROI Summary Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-white border-2 border-[#0078D4] shadow-xl space-y-6 relative overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#0078D4] via-[#742774] to-[#038387] absolute top-0 inset-x-0" />

                <div className="flex items-center justify-between border-b border-slate-200 pb-4 pt-2">
                  <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#0078D4]">
                    SAI NATIVE M365 SAVINGS PROJECTION
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    $0 Per-Seat Tax
                  </span>
                </div>

                <div>
                  <div className="text-sm font-bold text-slate-600">
                    Estimated Annual SaaS + Labor Value Reclaimed
                  </div>
                  <div className="text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
                    ${roiMetrics.totalAnnualImpact.toLocaleString()}
                    <span className="text-lg font-semibold text-slate-500"> / yr</span>
                  </div>
                  <div className="text-xs text-slate-600 mt-3 flex flex-wrap gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span>
                      Direct SaaS Saved:{' '}
                      <strong className="text-[#0078D4]">${roiMetrics.annualSaaSSaved.toLocaleString()}</strong>
                    </span>
                    <span>•</span>
                    <span>
                      Productivity Reclaimed:{' '}
                      <strong className="text-[#742774]">${roiMetrics.annualLaborValueReclaimed.toLocaleString()}</strong>
                    </span>
                  </div>
                  <div className="text-xs text-emerald-700 font-extrabold mt-2.5">
                    ✓ 3-Year Cumulative Impact: ${roiMetrics.threeYearSaved.toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#F0F6FF] border border-blue-200">
                    <div className="text-2xl font-extrabold text-[#0078D4]">
                      {roiMetrics.monthlyHoursSaved} hrs
                    </div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">
                      Admin Hours Saved / Mo ({roiMetrics.fteEquivalent} FTE)
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200">
                    <div className="text-2xl font-extrabold text-[#742774]">14 Days</div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">
                      Turnkey Rollout in Your Tenant
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Why Pay Twice?</strong> Your company already pays Microsoft for SharePoint, Power Apps, and Teams. <strong>Social AI Solutions (SAI)</strong> activates those licenses to replace expensive external software.
                </div>

                {/* Framed Primary Action Button */}
                <div className="p-1.5 rounded-2xl bg-blue-100 border border-blue-300">
                  <button
                    onClick={() => {
                      setPilotSubmitted(false);
                      setIsPilotModalOpen(true);
                    }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0078D4] to-[#005A9E] hover:from-[#106EBE] hover:to-[#004578] text-white font-extrabold text-sm shadow-md transition flex items-center justify-center gap-2"
                  >
                    <span>Lock In Waived-Fee Pilot With SAI</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 14-DAY FRICTIONLESS ONBOARDING TIMELINE */}
      <section id="process" className="py-20 lg:py-28 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#038387] text-xs font-bold uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5" /> Instant & Smooth Onboarding
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              From Kickoff to High User Adoption in 14 Days
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Because our 7 core accelerators are already 85% pre-built and battle-tested across 3,000+ assets, we eliminate months of trial-and-error and deploy smoothly into your M365 tenant.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {TIMELINE_STEPS.map((step, i) => (
              <div
                key={i}
                onClick={() => setActiveTimelineIdx(i)}
                className={`cursor-pointer p-6 rounded-2xl border-2 transition flex flex-col justify-between ${
                  activeTimelineIdx === i
                    ? 'bg-[#F0F6FF] border-[#0078D4] shadow-md'
                    : 'bg-white border-slate-200 hover:border-blue-300 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-lg bg-[#0078D4] text-white shadow-2xs">
                      {step.days}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">PHASE 0{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="text-[10px] font-mono font-bold uppercase text-slate-500">
                    Guaranteed Deliverable
                  </div>
                  <div className="text-xs font-extrabold text-emerald-700 mt-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ENTERPRISE SECURITY, CREDENTIALS & FOOTER CTA */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Security & Certifications Banner */}
          <div className="grid lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-sm">
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#038387] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                <Lock className="w-3.5 h-3.5" /> 100% Tenant Data Sovereignty
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Microsoft Certified Architecture & Zero External Cloud Risk
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every workflow is engineered by certified specialists. Your data never leaves your corporate Microsoft 365 compliance boundary—no external databases, no third-party servers, and zero recurring licensing fees.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {CERTIFICATIONS.map((cert, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center gap-3"
                >
                  <div
                    className={`w-12 h-11 rounded-xl border flex items-center justify-center font-mono text-xs font-extrabold shrink-0 ${cert.color}`}
                  >
                    {cert.code}
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-900 leading-snug">
                      {cert.title}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500">{cert.org} Verified</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Call-to-Action Banner */}
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#0078D4] via-[#005A9E] to-[#742774] text-white text-center max-w-5xl mx-auto space-y-6 shadow-xl border-2 border-blue-300">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-extrabold bg-white text-[#0078D4] shadow-sm">
              Q4 WAIVED-FEE PILOT INITIATIVE • 3 SLOTS AVAILABLE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Ready to Turn Your Paper & Spreadsheets into an Instant M365 System?
            </h2>
            <p className="text-blue-50 max-w-2xl mx-auto text-base sm:text-lg">
              Book a 10-minute live screen-share with Principal Architect <strong>Sai Sudhamsh Kamisetty</strong>. See our 3,000+ vehicle fleet suite, our Day-1 IT Asset tracker, or our Jira-replacing CAB board in action.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <div className="p-1.5 rounded-2xl bg-white/25 border border-white/50 inline-block">
                <button
                  onClick={() => {
                    setPilotSubmitted(false);
                    setIsPilotModalOpen(true);
                  }}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#0078D4] hover:bg-blue-50 font-extrabold text-base shadow-lg transition flex items-center justify-center gap-2"
                >
                  <span>Schedule 10-Min Live Architecture Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLEAN LIGHT FOOTER */}
      <footer className="border-t border-slate-200 py-10 bg-white text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <SaiFluentLogo size={30} />
            <span className="font-extrabold text-slate-900 text-sm">
              SAI | Social AI Solutions
            </span>
            <span className="text-slate-400">•</span>
            <span className="font-medium">Enterprise Microsoft 365 Low-Code & AI Practice</span>
          </div>
          <div className="font-semibold text-slate-500">
            Power Apps • SharePoint Online • Power Automate • Power BI • Global Delivery
          </div>
        </div>
      </footer>

      {/* LIGHT-THEMED MODAL: WAIVED-FEE PILOT & DEMO BOOKING */}
      {isPilotModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border-2 border-blue-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl my-8 text-slate-900">
            <button
              onClick={() => setIsPilotModalOpen(false)}
              className="absolute top-5 right-5 text-slate-500 hover:text-slate-900 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {pilotSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  SAI Pilot Grant Application Received
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thank you, <strong>{pilotForm.name || 'Partner'}</strong>. Principal Architect{' '}
                  <strong>Sai Sudhamsh Kamisetty</strong> at <strong>Social AI Solutions (SAI)</strong> has queued your 10-minute live architecture demo for{' '}
                  <span className="text-[#0078D4] font-bold">{pilotForm.targetApp}</span>.
                </p>

                <div className="p-4 rounded-2xl bg-[#F0F6FF] border border-blue-200 text-left text-xs font-mono text-slate-800 space-y-1">
                  <div className="text-[#0078D4] font-extrabold mb-1">
                    EXECUTIVE QUALIFICATION BRIEF:
                  </div>
                  <div>• Organization: {pilotForm.company} ({pilotForm.empSize})</div>
                  <div>• Selected Suite: {pilotForm.targetApp}</div>
                  <div>• Projected ROI: ${roiMetrics.totalAnnualImpact.toLocaleString()}/yr saved</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 justify-center pt-2">
                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 transition"
                  >
                    {copiedSummary ? '✓ Brief Copied to Clipboard' : 'Copy Executive ROI Brief'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsPilotModalOpen(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#0078D4] hover:bg-[#005A9E] text-white font-bold text-xs shadow-sm"
                  >
                    Return to SAI Portal
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handlePilotSubmit} className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0078D4] text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" /> SAI | Social AI Solutions • Waived-Fee Pilot
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Book a 10-Min Live Architecture Demo
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our priority is acquiring and empowering client partners—not bureaucratic pricing. We waive our standard $4,500 implementation fee for qualifying M365 tenants in exchange for a published ROI case study.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Rivera"
                      value={pilotForm.name}
                      onChange={(e) => setPilotForm({ ...pilotForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border-2 border-slate-200 text-sm text-slate-900 focus:border-[#0078D4] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={pilotForm.email}
                      onChange={(e) => setPilotForm({ ...pilotForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border-2 border-slate-200 text-sm text-slate-900 focus:border-[#0078D4] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Apex Logistics Inc."
                      value={pilotForm.company}
                      onChange={(e) => setPilotForm({ ...pilotForm, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border-2 border-slate-200 text-sm text-slate-900 focus:border-[#0078D4] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      M365 Tenant Size
                    </label>
                    <select
                      value={pilotForm.empSize}
                      onChange={(e) => setPilotForm({ ...pilotForm, empSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border-2 border-slate-200 text-sm text-slate-900 focus:border-[#0078D4] focus:bg-white focus:outline-none"
                    >
                      <option>50 - 75 Employees</option>
                      <option>75 - 350 Employees (Sweet Spot)</option>
                      <option>350 - 1,000 Employees</option>
                      <option>1,000+ Enterprise / Public Sector</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary Turnkey System to Demo
                  </label>
                  <select
                    value={pilotForm.targetApp}
                    onChange={(e) => setPilotForm({ ...pilotForm, targetApp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border-2 border-slate-200 text-sm text-slate-900 focus:border-[#0078D4] focus:bg-white focus:outline-none"
                  >
                    {SOLUTIONS.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Current Paper / Spreadsheet Pain Point (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g., Currently tracking 120 laptops or 85 fleet vehicles in Excel..."
                    value={pilotForm.notes}
                    onChange={(e) => setPilotForm({ ...pilotForm, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border-2 border-slate-200 text-sm text-slate-900 focus:border-[#0078D4] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="p-1.5 rounded-2xl bg-blue-100 border border-blue-300">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0078D4] to-[#005A9E] hover:from-[#106EBE] hover:to-[#004578] text-white font-extrabold text-sm shadow-md transition"
                  >
                    Confirm Demo & Waived-Fee Pilot Eligibility
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// --- HELPER: SIMULATED INTERACTIVE DATA PER PROJECT ---
function getMockRecordsForProject(projectId) {
  switch (projectId) {
    case 'fleet':
      return [
        {
          id: 'fl-1',
          code: 'VEH-3042',
          title: '2025 Ford F-150 Lightning (Unit #418)',
          stage: 'Stage 2: Awaiting Admin Key Dispatch',
          meta1: 'Driver: M. Reynolds (License & Disclosure Mail Verified ✓)',
          meta2: 'Window: Nov 18 – Nov 21',
          costOrSla: '0 Double-Booking Conflicts',
          actionLabel: 'Approve & Assign Vehicle',
          status: 'Pending'
        },
        {
          id: 'fl-2',
          code: 'MAINT-889',
          title: 'Preventative 15,000-Mile Service & Cost Keeper (Pool B)',
          stage: 'Auto-Reminder Triggered',
          meta1: 'Vendor: Tallahassee Fleet Service',
          meta2: 'Logged Bill: $410.00',
          costOrSla: 'Due in 140 Miles',
          actionLabel: 'Approve Maintenance Bill',
          status: 'Pending'
        },
        {
          id: 'fl-3',
          code: 'VEH-1109',
          title: 'Chevy Tahoe Field Command #109',
          stage: 'Verified',
          meta1: 'Driver: K. Patel (User Confirmation Sent ✓)',
          meta2: 'Dispatched: Tallahassee HQ',
          costOrSla: 'Active Trip',
          actionLabel: 'Approved',
          status: 'Verified'
        }
      ];
    case 'it-asset':
      return [
        {
          id: 'it-1',
          code: 'ONBOARD-402',
          title: 'Day-1 Bundle: MacBook Pro M3 + Dual 4K Dell',
          stage: 'Awaiting IT Staging Sign-Off',
          meta1: 'New Hire: Priya Nair (Sr. Data Analyst)',
          meta2: 'Start Date: Monday 9:00 AM',
          costOrSla: 'Serial: C02Y98ZKL • Entra ID Linked',
          actionLabel: 'Provision & Send Custody Form',
          status: 'Pending'
        },
        {
          id: 'it-2',
          code: 'OFFBOARD-119',
          title: 'Termination Recovery Checklist: ThinkPad X1 Carbon',
          stage: 'Auto-Triggered by HR Exit Flow',
          meta1: 'Exiting Staff: J. Miller (Remote - Austin)',
          meta2: 'Prepaid Return Label Queued',
          costOrSla: 'Asset Value: $1,890.00',
          actionLabel: 'Trigger Return Lock & Label',
          status: 'Pending'
        },
        {
          id: 'it-3',
          code: 'AUDIT-901',
          title: 'Q4 Microsoft E3 & Adobe License Reclamation',
          stage: 'Verified',
          meta1: '14 Inactive Seats Reclaimed Automatically',
          meta2: 'Synced with Entra ID',
          costOrSla: 'Saved $4,200/yr',
          actionLabel: 'Verified',
          status: 'Verified'
        }
      ];
    case 'cab-jira':
      return [
        {
          id: 'cab-1',
          code: 'CHG-2094',
          title: 'Prod SQL Firewall & SharePoint API Gateway Patch',
          stage: 'CAB Voting: 3/4 Approved in Teams',
          meta1: 'Risk Score: Low (Rollback Plan Attached ✓)',
          meta2: 'Window: Sat 02:00 EST',
          costOrSla: 'Replaces Jira ITSM',
          actionLabel: 'Cast Final CAB Vote',
          status: 'Pending'
        },
        {
          id: 'cab-2',
          code: 'SPRINT-44',
          title: 'Epic: Customer Portal SSO Migration (8 Story Pts)',
          stage: 'In QA Review • Kanban Lane 3',
          meta1: 'Assignee: Dev Team Alpha',
          meta2: '0 Blockers Logged',
          costOrSla: 'On Schedule',
          actionLabel: 'Promote to Production',
          status: 'Pending'
        }
      ];
    case 'leave-hr':
      return [
        {
          id: 'lv-1',
          code: 'LVE-772',
          title: 'Multi-Step Paid Annual Leave (5 Business Days)',
          stage: 'Stage 1: Direct Manager Approval',
          meta1: 'Employee: David Chen (Notified Throughout ✓)',
          meta2: 'Team Coverage Check: 0 Overlaps ✓',
          costOrSla: 'Remaining Balance: 92 hrs',
          actionLabel: '1-Click Approve Leave',
          status: 'Pending'
        },
        {
          id: 'lv-2',
          code: 'LVE-769',
          title: 'Extended Leave Multi-Step HR Sign-Off',
          stage: 'Verified',
          meta1: 'Manager & User Notified Automatically',
          meta2: 'Payroll CSV Synced',
          costOrSla: 'SLA: 18 mins',
          actionLabel: 'Approved',
          status: 'Verified'
        }
      ];
    case 'incident':
      return [
        {
          id: 'inc-1',
          code: 'CASE-5081',
          title: 'Public Intake Complaint #5081: Facility Safety',
          stage: 'Intake Triage • Needs Assignee',
          meta1: 'Submitted via Public Form (Fair-Process Active ✓)',
          meta2: 'Submitter & Assignee Notified Throughout',
          costOrSla: 'SLA Timer: 4h 12m Remaining',
          actionLabel: 'Assign Investigator',
          status: 'Pending'
        },
        {
          id: 'inc-2',
          code: 'CASE-5074',
          title: 'Internal Incident Resolution #5074',
          stage: 'Verified',
          meta1: 'Full Audit Trail from Intake to Closing',
          meta2: 'Claimant Auto-Notified',
          costOrSla: 'Closed in 36h',
          actionLabel: 'Closed',
          status: 'Verified'
        }
      ];
    case 'vendor':
      return [
        {
          id: 'vnd-1',
          code: 'INV-9940',
          title: 'Cloud Infrastructure MSA & Q4 Invoice ($18,500)',
          stage: 'Threshold >$15k: Routed to VP Finance',
          meta1: 'Vendor: NorthStar Data Corp (W-9 Verified ✓)',
          meta2: 'Budget Variance: -2.1% (Under Budget)',
          costOrSla: 'Auto-Renewal Radar: 60 Days',
          actionLabel: 'Approve AP Release',
          status: 'Pending'
        }
      ];
    case 'field-capa':
    default:
      return [
        {
          id: 'fld-1',
          code: 'CAPA-312',
          title: 'Site Safety Audit Failure: Warehouse Bay 4 Fire Exit',
          stage: 'Critical CAPA Auto-Generated from Mobile App',
          meta1: 'Inspector: R. Gomez (Photo + GPS Stamped)',
          meta2: 'Assigned to: Facility Supervisor',
          costOrSla: 'Mandatory Fix SLA: 24 Hours',
          actionLabel: 'Verify Photo Proof & Close',
          status: 'Pending'
        }
      ];
  }
}