// components/molecules/DropdownMenu.tsx
"use client";
import { useState } from "react";
import Button from "@/app/[locale]/components/molecules/boton";
import { ChevronUp, ChevronDown } from "lucide-react";
interface DropdownMenuProps {
    mainLabel: string;
    mobile: "isMobile" | "setIsMobile";
    variant?: "btnHeader" | "btnHeaderWhite";
    items: { label: string; href: string }[];
}

export default function DropdownMenu({ mainLabel, items, mobile, variant }: DropdownMenuProps) {
    const [open, setOpen] = useState(false);
 if (mobile === "isMobile") {
    return (
      <div className="w-full justify-items-center">
        <Button
          variant="btnHeaderWhite"
          onClick={() => setOpen(!open)}
          icon={open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          iconPosition="right"
        >
          {mainLabel}
        </Button>

        {open && (
          <div className="gap-2 mt-2 p-4 bg-[#F4F4F4] shadow-lg rounded-[8px] w-full">
            {items.map((item, idx) => (
              <Button
                key={idx}
                href={item.href}
                variant="btnDrop"
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // --- Desktop (dropdown flotante) ---
  return (
    <div className="relative inline-block">
      <Button onClick={() => setOpen(!open)} variant={variant}>
        {mainLabel}
      </Button>

      {open && (
        <div className="absolute left-0 mt-2 w-fit bg-[#F4F4F4] shadow-lg rounded-[8px] px-2.5 py-2.5 gap-5">
          {items.map((item, idx) => (
            <Button key={idx} href={item.href} variant="btnDrop">
              {item.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

