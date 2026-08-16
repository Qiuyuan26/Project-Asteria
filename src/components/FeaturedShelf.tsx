"use client";

import { useApp, Resource } from "@/context/AppContext";
import Link from "next/link";
import { Download } from "lucide-react";
import { ToastContainer, useToast } from "@/components/Toast";

export default function FeaturedShelf() {
  const { resources, recordDownload } = useApp();
  const { toasts, addToast, removeToast } = useToast();

  const approvedResources = resources
    .filter(r => r.status === "approved")
    .sort((a, b) => (a.serialNumber || 0) - (b.serialNumber || 0))
    .slice(0, 8);

  const handleDownload = (e: React.MouseEvent, res: Resource) => {
    e.stopPropagation();
    e.preventDefault();
    recordDownload(res.id);
    if (res.fileUrl) {
      const a = document.createElement("a");
      a.href = res.fileUrl;
      a.download = res.fileUrl.split("/").pop() || "resource";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      addToast(`Downloading "${res.title}"`, "download");
    }
  };

  if (approvedResources.length === 0) {
    return (
      <div className="text-center py-16 border-2 border-dashed rounded-2xl" style={{ borderColor: "#bacdaf" }}>
        <p className="text-sm" style={{ color: "#6B7280", fontFamily: "'Montserrat', sans-serif" }}>
          No resources yet — check back soon.
        </p>
      </div>
    );
  }

  return (
    <>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {approvedResources.map((res, i) => {
          const isPink = i % 2 === 0;
          return (
            <Link
              key={res.id}
              href={`/resources/${res.id}`}
              className="group relative flex flex-col rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform"
              style={{
                boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                aspectRatio: "3/4",
              }}
            >
              {/* Full cover area */}
              <div className="flex-1 relative">
                {/* Cover pattern */}
                <div
                  className="absolute inset-0"
                  style={
                    isPink
                      ? {
                          backgroundColor: "#ffbedd",
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22'%3E%3Cpath d='M11 8.5C10 6 7 6 7 8.5s4 5.5 4 5.5 4-3 4-5.5-3-2.5-4 0z' fill='%23e890b8' opacity='0.45'/%3E%3C/svg%3E")`,
                          backgroundSize: "22px 22px",
                        }
                      : {
                          backgroundColor: "#2e3a32",
                          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(255,255,255,0.04) 5px, rgba(255,255,255,0.04) 6px)`,
                        }
                  }
                />

                {/* Number badge — top left */}
                <div
                  className="absolute top-3 left-3 z-10 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.75)" }}
                >
                  <span className="text-[10px] font-semibold text-[#2e3a32]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {i + 1}
                  </span>
                </div>

                {/* File type — bottom right of cover */}
                <div className="absolute bottom-20 right-3 z-10">
                  <span
                    className="text-[8px] font-semibold uppercase"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: isPink ? "rgba(46,58,50,0.4)" : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {res.fileType}
                  </span>
                </div>

                {/* Center label card */}
                <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 z-10">
                  <div
                    className="rounded-xl px-4 py-4 text-center"
                    style={{
                      backgroundColor: isPink ? "rgba(255,255,255,0.88)" : "rgba(245,240,232,0.88)",
                    }}
                  >
                    <p
                      className="text-[7px] font-semibold uppercase tracking-[0.18em] mb-1"
                      style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(46,58,50,0.45)" }}
                    >
                      COMPOSITION NOTEBOOK
                    </p>
                    <p
                      className="text-[8px] mb-1.5"
                      style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(46,58,50,0.55)" }}
                    >
                      {res.country}
                    </p>
                    <p
                      className="text-sm leading-tight text-[#2e3a32]"
                      style={{ fontFamily: "'The Seasons', Georgia, serif" }}
                    >
                      {res.grade}
                    </p>
                    <p
                      className="text-[8px] mt-1"
                      style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(46,58,50,0.45)" }}
                    >
                      {res.subject}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom bar — white */}
              <div className="bg-white px-4 py-2.5 flex items-center justify-between" style={{ minHeight: "60px" }}>
                <div className="min-w-0 flex-1 mr-2">
                  <p
                    className="text-xs font-semibold truncate"
                    style={{ fontFamily: "'The Seasons', Georgia, serif", color: "#8fb08a" }}
                  >
                    {res.title}
                  </p>
                  <p
                    className="text-[9px] mt-0.5"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(46,58,50,0.4)" }}
                  >
                    {res.downloadsCount} downloads
                  </p>
                </div>
                <button
                  onClick={(e) => handleDownload(e, res)}
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "#bacdaf" }}
                >
                  <Download size={12} color="#2e3a32" />
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
