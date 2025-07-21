import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Brain,
  Stethoscope,
  Calendar,
  FileText,
  Mic,
  Image,
  Minimize2,
  Maximize2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
  type?: "text" | "suggestion" | "analysis";
}

const predefinedQuestions = [
  "Analyze this dental X-ray for potential issues",
  "Suggest treatment plan for tooth decay",
  "Schedule optimal appointment times",
  "Check drug interactions for medications",
  "Generate patient treatment summary",
  "Recommend preventive care plan",
];

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your AI dental assistant. I can help with diagnostics, treatment planning, scheduling, and patient analysis. How can I assist you today?",
      sender: "ai",
      timestamp: new Date(),
      type: "text",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
      type: "text",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const generateAIResponse = (userInput: string): Message => {
    const lowerInput = userInput.toLowerCase();
    let response = "";

    if (lowerInput.includes("x-ray") || lowerInput.includes("xray")) {
      response = `🔍 **AI X-Ray Analysis:**

Based on the uploaded image, I've detected:
• **Tooth #14**: Possible caries formation in the distal surface
• **Tooth #26**: Early signs of periodontal bone loss
• **Overall**: Good bone density, no immediate concerns

**Recommended Actions:**
1. Schedule composite filling for tooth #14
2. Deep cleaning for tooth #26 area
3. Follow-up in 3 months

Would you like me to generate a detailed treatment plan?`;
    } else if (
      lowerInput.includes("treatment") ||
      lowerInput.includes("plan")
    ) {
      response = `📋 **AI Treatment Recommendation:**

For optimal patient care, I suggest:

**Immediate (This Week):**
• Diagnostic consultation - 30 mins
• Digital X-rays if needed
• Pain management if applicable

**Short-term (2-4 weeks):**
• Primary treatment procedures
• Restorative work if required

**Long-term (3-6 months):**
• Follow-up examinations
• Preventive care scheduling
• Maintenance appointments

Estimated cost: $850-$1,200
Insurance coverage: 70-80%`;
    } else if (
      lowerInput.includes("schedule") ||
      lowerInput.includes("appointment")
    ) {
      response = `📅 **AI Scheduling Optimization:**

Best available slots based on:
• Provider expertise match
• Patient history preferences
• Optimal treatment timing

**Recommended Times:**
• **Today**: 2:30 PM - Emergency slot
• **Tomorrow**: 10:00 AM, 2:00 PM
• **This Week**: 9 slots available

**AI Insights:**
• Morning appointments show 15% better patient outcomes
• Dr. Smith has highest success rate for this treatment
• Patient typically prefers afternoon slots

Shall I book the optimal slot?`;
    } else if (
      lowerInput.includes("drug") ||
      lowerInput.includes("medication")
    ) {
      response = `💊 **AI Drug Interaction Check:**

**Analysis Complete:**
✅ No major contraindications found
⚠️ Minor considerations:

**Current Medications:**
• Amoxicillin 500mg - Safe for dental procedures
• Ibuprofen 400mg - No interactions detected

**Recommendations:**
• Continue current antibiotics as prescribed
• Monitor for allergic reactions
• Consider probiotic supplementation

**Dosage Adjustments:**
None required for standard dental procedures.`;
    } else if (
      lowerInput.includes("patient") ||
      lowerInput.includes("summary")
    ) {
      response = `👤 **AI Patient Analysis:**

**Risk Assessment:** Low-Medium
**Treatment Compliance:** 85% (Good)
**Payment History:** Excellent

**Key Insights:**
• 3 missed appointments in last year
• Prefers afternoon slots (2-4 PM)
• Responds well to preventive care
• High anxiety - recommend sedation options

**Suggested Approach:**
• Use calming communication
• Explain procedures step-by-step
• Offer comfort measures
• Schedule longer appointment slots`;
    } else {
      response = `🤖 **AI Assistant Response:**

I understand you're asking about "${userInput}". 

I can help you with:
• **Diagnostic Analysis** - X-ray interpretation, symptom assessment
• **Treatment Planning** - Evidence-based recommendations
• **Patient Management** - Risk assessment, compliance tracking  
• **Scheduling Optimization** - Best time slots, provider matching
• **Clinical Documentation** - Auto-generated notes and summaries
• **Drug Interactions** - Safety checks and recommendations

Would you like me to elaborate on any of these areas, or do you have a specific case you'd like me to analyze?`;
    }

    return {
      id: Date.now().toString(),
      content: response,
      sender: "ai",
      timestamp: new Date(),
      type: "text",
    };
  };

  const handleQuestionClick = (question: string) => {
    setInputValue(question);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <div className="relative">
            <Brain className="w-6 h-6" />
            <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300" />
          </div>
          <span className="font-medium">AI Dental Assistant</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={cn(
          "bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300",
          isMinimized ? "w-80 h-16" : "w-96 h-[600px]",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                AI Dental Assistant
              </h3>
              <p className="text-xs text-gray-600">Online • Ready to help</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMinimized ? (
                <Maximize2 className="w-4 h-4 text-gray-500" />
              ) : (
                <Minimize2 className="w-4 h-4 text-gray-500" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-96">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.sender === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-3 text-sm",
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-900",
                    )}
                  >
                    {message.sender === "ai" && (
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-medium text-blue-600">
                          AI Assistant
                        </span>
                      </div>
                    )}
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    <div
                      className={cn(
                        "text-xs mt-2 opacity-70",
                        message.sender === "user"
                          ? "text-blue-100"
                          : "text-gray-500",
                      )}
                    >
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl px-4 py-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                      <span className="text-gray-600">AI is analyzing...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="px-4 pb-4">
              <div className="text-xs font-medium text-gray-600 mb-2">
                Quick Actions:
              </div>
              <div className="flex flex-wrap gap-2">
                {predefinedQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(question)}
                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    {question.substring(0, 25)}...
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Ask about diagnostics, treatments, scheduling..."
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Mic className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Image className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;
