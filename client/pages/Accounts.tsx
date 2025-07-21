import React from "react";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  MoreHorizontal,
  ExternalLink,
  CreditCard,
  Package,
  Activity,
  BarChart,
} from "lucide-react";

const Accounts = () => {
  const accounts = [
    {
      id: 1,
      name: "FREE CASH",
      amount: "$4,012,409",
      description: "This is money for this need",
      icon: CreditCard,
      color: "bg-teal-100 text-teal-700",
      bgColor: "bg-teal-500",
    },
    {
      id: 2,
      name: "DRUG PURCHASE",
      amount: "$4,120,130",
      description: "No req. 124 1245 5567 0967",
      icon: Package,
      color: "bg-purple-100 text-purple-700",
      bgColor: "bg-purple-500",
    },
    {
      id: 3,
      name: "TREATMENT",
      amount: "$3,341,786",
      description: "This is money for this requirement",
      icon: Activity,
      color: "bg-pink-100 text-pink-700",
      bgColor: "bg-pink-500",
    },
    {
      id: 4,
      name: "STOCK FUND",
      amount: "$2,139,209",
      description: "This is money for this need",
      icon: BarChart,
      color: "bg-yellow-100 text-yellow-700",
      bgColor: "bg-yellow-500",
    },
  ];

  const inactiveAccounts = [
    {
      id: 1,
      name: "MONTHLY RENT",
      amount: "$6,123,434",
      description: "No ref. 069 2345 2234 3445",
      icon: BarChart,
      color: "bg-gray-100 text-gray-700",
      bgColor: "bg-gray-400",
      status: "Activate",
    },
    {
      id: 2,
      name: "DRUG PURCHASE",
      amount: "$3,246,245",
      description: "No req. 069 3345 2234 5678",
      icon: Package,
      color: "bg-gray-100 text-gray-700",
      bgColor: "bg-gray-400",
      status: "Activate",
    },
    {
      id: 3,
      name: "TREATMENT",
      amount: "$5,234,456",
      description: "No ref. 069 3345 6543 4321",
      icon: Activity,
      color: "bg-gray-100 text-gray-700",
      bgColor: "bg-gray-400",
      status: "Activate",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Asset Value */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">TOTAL ASSET VALUE</div>
              <div className="text-2xl font-bold text-gray-900">
                $13,232,432
              </div>
            </div>
          </div>
        </div>

        {/* Liquid Assets */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">LIQUID ASSETS</div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  $8,983,123
                </span>
                <span className="text-sm text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  4.51%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Physical Assets Value */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">
                  PHYSICAL ASSETS VALUE
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    $4,249,309
                  </span>
                  <span className="text-sm text-red-600 flex items-center gap-1">
                    <TrendingDown className="w-4 h-4" />
                    2.51%
                  </span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
              <ExternalLink className="w-4 h-4" />
              Transfer money
            </button>
          </div>
        </div>
      </div>

      {/* Account Lists */}
      <div className="space-y-6">
        {/* List Account Header */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            List Account
          </h2>
          <p className="text-gray-600">All account setup manually</p>
        </div>

        {/* Active List */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            ACTIVE LIST
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accounts.map((account) => (
              <div
                key={account.id}
                className="bg-white p-6 rounded-xl border border-gray-200 relative"
              >
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 ${account.bgColor} rounded-lg flex items-center justify-center`}
                  >
                    <account.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {account.name}
                    </div>
                    <div className="text-xl font-bold text-gray-900">
                      {account.amount}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600">{account.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inactive List */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            INACTIVE LIST
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inactiveAccounts.map((account) => (
              <div
                key={account.id}
                className="bg-white p-6 rounded-xl border border-gray-200 relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 ${account.bgColor} rounded-lg flex items-center justify-center`}
                    >
                      <account.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-600">
                        {account.name}
                      </div>
                      <div className="text-xl font-bold text-gray-900">
                        {account.amount}
                      </div>
                    </div>
                  </div>
                  <button className="text-blue-600 text-sm font-medium hover:underline">
                    {account.status}
                  </button>
                </div>

                <p className="text-sm text-gray-600">{account.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
