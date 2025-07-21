import React, { useState } from "react";
import {
  MessageCircle,
  Brain,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Phone,
  Mail,
  Search,
  Filter,
  Plus,
  Send,
  Paperclip,
  Smile,
  MoreHorizontal,
  Star,
  RefreshCw,
  Zap,
  HeadphonesIcon,
  BookOpen,
  HelpCircle,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

const supportTickets = [
  {
    id: "T-001",
    patient: "Sarah Johnson",
    subject: "Appointment Rescheduling",
    status: "open",
    priority: "medium",
    created: "2024-01-15T10:30:00Z",
    lastUpdate: "2024-01-15T14:20:00Z",
    assignedTo: "Lisa Thompson",
    category: "scheduling",
    aiResolved: false,
  },
  {
    id: "T-002",
    patient: "Michael Brown",
    subject: "Billing Inquiry",
    status: "resolved",
    priority: "low",
    created: "2024-01-14T09:15:00Z",
    lastUpdate: "2024-01-14T16:45:00Z",
    assignedTo: "AI Assistant",
    category: "billing",
    aiResolved: true,
  },
  {
    id: "T-003",
    patient: "Emma Davis",
    subject: "Treatment Questions",
    status: "pending",
    priority: "high",
    created: "2024-01-14T11:00:00Z",
    lastUpdate: "2024-01-14T11:30:00Z",
    assignedTo: "Dr. Sarah Johnson",
    category: "medical",
    aiResolved: false,
  },
  {
    id: "T-004",
    patient: "David Wilson",
    subject: "Insurance Coverage",
    status: "in_progress",
    priority: "medium",
    created: "2024-01-13T15:20:00Z",
    lastUpdate: "2024-01-15T09:10:00Z",
    assignedTo: "Maria Garcia",
    category: "insurance",
    aiResolved: false,
  },
  {
    id: "T-005",
    patient: "Jennifer Miller",
    subject: "Post-treatment Care",
    status: "resolved",
    priority: "low",
    created: "2024-01-12T13:45:00Z",
    lastUpdate: "2024-01-13T10:20:00Z",
    assignedTo: "AI Assistant",
    category: "aftercare",
    aiResolved: true,
  },
];

const knowledgeBase = [
  {
    category: "Appointments",
    articles: [
      "How to schedule an appointment",
      "Cancellation and rescheduling policy",
      "Emergency appointment procedures",
      "Online booking system guide",
    ],
    icon: Clock,
    color: "bg-blue-100 text-blue-700",
  },
  {
    category: "Billing & Insurance",
    articles: [
      "Understanding your dental bill",
      "Insurance claim procedures",
      "Payment plan options",
      "FSA and HSA usage",
    ],
    icon: FileText,
    color: "bg-green-100 text-green-700",
  },
  {
    category: "Treatment Information",
    articles: [
      "Pre-treatment preparation",
      "Post-treatment care instructions",
      "Pain management guidelines",
      "Medication instructions",
    ],
    icon: HelpCircle,
    color: "bg-purple-100 text-purple-700",
  },
  {
    category: "General Questions",
    articles: [
      "Office hours and location",
      "New patient registration",
      "Privacy policy and HIPAA",
      "Contact information",
    ],
    icon: BookOpen,
    color: "bg-orange-100 text-orange-700",
  },
];

const aiMetrics = [
  {
    title: "AI Resolution Rate",
    value: "73%",
    change: "+8%",
    icon: Brain,
    color: "text-blue-600",
  },
  {
    title: "Avg Response Time",
    value: "2.3 min",
    change: "-15%",
    icon: Clock,
    color: "text-green-600",
  },
  {
    title: "Customer Satisfaction",
    value: "4.8/5",
    change: "+0.2",
    icon: Star,
    color: "text-yellow-600",
  },
  {
    title: "Tickets Resolved",
    value: "156",
    change: "+12%",
    icon: CheckCircle,
    color: "text-purple-600",
  },
];

const statusColors = {
  open: "bg-red-100 text-red-800",
  pending: "bg-yellow-100 text-yellow-800",
  in_progress: "bg-blue-100 text-blue-800",
  resolved: "bg-green-100 text-green-800",
};

const priorityColors = {
  low: "bg-gray-100 text-gray-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800",
};

const CustomerSupport = () => {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [chatMessage, setChatMessage] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredTickets = supportTickets.filter(
    (ticket) => filterStatus === "all" || ticket.status === filterStatus,
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <Brain className="w-8 h-8 text-blue-600" />
            AI-Powered Customer Support
          </h1>
          <p className="text-gray-600 mt-1">
            Intelligent support system with automated assistance
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all">
            <Zap className="w-4 h-4" />
            AI Assistant
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700">
            <Plus className="w-4 h-4" />
            New Ticket
          </button>
        </div>
      </div>

      {/* AI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {aiMetrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900">
                  {metric.value}
                </p>
                <p
                  className={cn(
                    "text-sm flex items-center gap-1",
                    metric.color,
                  )}
                >
                  <metric.icon className="w-4 h-4" />
                  {metric.change}
                </p>
              </div>
              <div
                className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center",
                  metric.color === "text-blue-600" && "bg-blue-100",
                  metric.color === "text-green-600" && "bg-green-100",
                  metric.color === "text-yellow-600" && "bg-yellow-100",
                  metric.color === "text-purple-600" && "bg-purple-100",
                )}
              >
                <metric.icon className={cn("w-6 h-6", metric.color)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Support Tickets */}
        <div className="lg:col-span-2 space-y-6">
          {/* Filters */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {["all", "open", "pending", "in_progress", "resolved"].map(
                  (status) => (
                    <button
                      key={status}
                      onClick={() => setFilterStatus(status)}
                      className={cn(
                        "px-3 py-2 text-sm font-medium rounded-lg transition-colors capitalize",
                        filterStatus === status
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                      )}
                    >
                      {status.replace("_", " ")}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tickets..."
                  className="pl-10 pr-4 py-2 w-64 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>

          {/* Tickets List */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-200">
              {filteredTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className={cn(
                    "p-6 cursor-pointer transition-colors",
                    selectedTicket === ticket.id
                      ? "bg-blue-50 border-l-4 border-blue-500"
                      : "hover:bg-gray-50",
                  )}
                  onClick={() =>
                    setSelectedTicket(
                      selectedTicket === ticket.id ? null : ticket.id,
                    )
                  }
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-gray-900">
                          {ticket.id}
                        </span>
                        <span
                          className={cn(
                            "px-2 py-1 text-xs font-medium rounded-full",
                            statusColors[
                              ticket.status as keyof typeof statusColors
                            ],
                          )}
                        >
                          {ticket.status.replace("_", " ")}
                        </span>
                        <span
                          className={cn(
                            "px-2 py-1 text-xs font-medium rounded-full",
                            priorityColors[
                              ticket.priority as keyof typeof priorityColors
                            ],
                          )}
                        >
                          {ticket.priority}
                        </span>
                        {ticket.aiResolved && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                            <Brain className="w-3 h-3" />
                            AI Resolved
                          </span>
                        )}
                      </div>
                      <h3 className="font-medium text-gray-900 mb-1">
                        {ticket.subject}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {ticket.patient}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {new Date(ticket.created).toLocaleDateString()}
                        </span>
                        <span>Assigned to: {ticket.assignedTo}</span>
                      </div>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  {selectedTicket === ticket.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-medium text-gray-900">
                            Ticket Details
                          </h4>
                          <div className="flex items-center gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                              <Phone className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                              <Mail className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Category:</span>
                            <span className="font-medium text-gray-900 capitalize">
                              {ticket.category}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Last Update:</span>
                            <span className="font-medium text-gray-900">
                              {new Date(ticket.lastUpdate).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Knowledge Base & AI Assistant */}
        <div className="space-y-6">
          {/* AI Chat */}
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">AI Assistant</h3>
                  <p className="text-sm text-gray-600">
                    Online • Ready to help
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 h-64 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-xs">
                    <p className="text-sm text-gray-900">
                      Hi! I'm your AI support assistant. I can help you with:
                      <br />
                      • Appointment scheduling
                      <br />
                      • Billing questions
                      <br />
                      • Treatment information
                      <br />• General inquiries
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Paperclip className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Smile className="w-4 h-4" />
                </button>
                <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Knowledge Base */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Knowledge Base
              </h3>
              <button className="text-blue-600 text-sm hover:underline">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {knowledgeBase.map((category, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center",
                          category.color,
                        )}
                      >
                        <category.icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-medium text-gray-900">
                        {category.category}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {category.articles.slice(0, 2).map((article, idx) => (
                        <button
                          key={idx}
                          className="block w-full text-left text-sm text-blue-600 hover:underline"
                        >
                          {article}
                        </button>
                      ))}
                      <button className="text-xs text-gray-500 hover:text-gray-700">
                        +{category.articles.length - 2} more articles
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <HeadphonesIcon className="w-6 h-6 text-blue-600" />
          Quick Support Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="bg-white p-4 rounded-lg border border-gray-200 text-left hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-medium text-gray-900">AI Auto-Reply</span>
            </div>
            <p className="text-sm text-gray-600">
              Enable automatic AI responses for common questions
            </p>
          </button>

          <button className="bg-white p-4 rounded-lg border border-gray-200 text-left hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-4 h-4 text-green-600" />
              </div>
              <span className="font-medium text-gray-900">Bulk Actions</span>
            </div>
            <p className="text-sm text-gray-600">
              Process multiple tickets simultaneously
            </p>
          </button>

          <button className="bg-white p-4 rounded-lg border border-gray-200 text-left hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-purple-600" />
              </div>
              <span className="font-medium text-gray-900">Templates</span>
            </div>
            <p className="text-sm text-gray-600">
              Use pre-written response templates
            </p>
          </button>

          <button className="bg-white p-4 rounded-lg border border-gray-200 text-left hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <Star className="w-4 h-4 text-orange-600" />
              </div>
              <span className="font-medium text-gray-900">Feedback</span>
            </div>
            <p className="text-sm text-gray-600">
              Collect and analyze customer feedback
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
