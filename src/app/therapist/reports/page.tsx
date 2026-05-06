import Link from "next/link";
import { FileText, Download, Share2, Search, Clock, CheckCircle, AlertCircle } from "lucide-react";

export default function ReportsPage() {
  const reports = [
    { id: 1, patient: "ياسين أحمد", type: "تقييم شهري", date: "2024-03-15", status: "جاهز", color: "text-accent" },
    { id: 2, patient: "ليلى محمود", type: "خطة علاجية", date: "2024-03-20", status: "قيد المراجعة", color: "text-blue" },
    { id: 3, patient: "عمر خالد", type: "تقرير تقدم", date: "2024-03-25", status: "جاهز", color: "text-accent" },
    { id: 4, patient: "فاطمة علي", type: "تقييم نطق", date: "2024-03-28", status: "مسودة", color: "text-slate-400" },
  ];

  return (
    <div className="min-h-screen bg-soft-bg dark:bg-dark-bg p-10 font-bold transition-colors duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div>
          <h1 className="text-5xl font-black text-slate-800 dark:text-white flex items-center gap-4 italic tracking-tight">
             مركز التقارير الطبية 📝
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg mt-2">إصدار وتحميل التقارير المهنية بنقرة واحدة</p>
        </div>
        <button className="btn-premium px-12 py-6 flex items-center gap-3 text-xl shadow-glow-coral bg-gradient-to-r from-coral to-peach">
          <FileText className="w-8 h-8" />
          إنشاء تقرير جديد
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {[
          { label: "تقارير الشهر", value: "12", icon: FileText, color: "text-blue" },
          { label: "تم تحميلها", value: "45", icon: Download, color: "text-sage" },
          { label: "بانتظار المراجعة", value: "3", icon: Clock, color: "text-coral" },
          { label: "تمت مشاركتها", value: "28", icon: Share2, color: "text-peach" },
        ].map((item, i) => (
          <div key={i} className="glass-card p-8 rounded-[3rem] border border-white/20 shadow-xl">
            <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
            <p className="text-3xl font-black text-slate-800 dark:text-white">{item.value}</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-[4rem] overflow-hidden border border-white/20 shadow-2xl">
        <div className="p-8 border-b border-slate-100 dark:border-white/5 bg-white/50 dark:bg-slate-900/50 flex flex-col md:flex-row justify-between gap-6">
          <h3 className="text-2xl font-black text-slate-800 dark:text-white italic">سجل التقارير الحديثة</h3>
          <div className="relative group flex-1 md:max-w-md">
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300" />
            <input 
              type="text" 
              placeholder="ابحث باسم المريض..."
              className="w-full bg-slate-50 dark:bg-slate-800/50 rounded-2xl py-4 pr-14 pl-6 text-lg outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/30 text-right">
                <th className="p-8 text-slate-400 uppercase tracking-widest text-xs">المريض</th>
                <th className="p-8 text-slate-400 uppercase tracking-widest text-xs">نوع التقرير</th>
                <th className="p-8 text-slate-400 uppercase tracking-widest text-xs">التاريخ</th>
                <th className="p-8 text-slate-400 uppercase tracking-widest text-xs">الحالة</th>
                <th className="p-8 text-slate-400 uppercase tracking-widest text-xs">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b border-slate-50 dark:border-white/5 hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors group">
                  <td className="p-8 font-black text-slate-800 dark:text-white">{report.patient}</td>
                  <td className="p-8 text-slate-500 dark:text-slate-400 italic">{report.type}</td>
                  <td className="p-8 text-slate-400 text-sm">{report.date}</td>
                  <td className="p-8">
                     <span className={`flex items-center gap-2 ${report.color}`}>
                       {report.status === "جاهز" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                       {report.status}
                     </span>
                  </td>
                  <td className="p-8">
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-3 bg-blue/10 text-blue rounded-xl hover:bg-blue hover:text-white transition-all shadow-glow-blue">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-sage/10 text-sage rounded-xl hover:bg-sage hover:text-white transition-all shadow-glow-coral">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
