// components/molecules/DropdownMenu.tsx
"use client";
import { useState } from "react";
import Button from "@/components/molecules/boton";

interface DropdownMenuProps {
    mainLabel: string;
    items: { label: string; href: string }[];
}

export default function DropdownMenu({ mainLabel, items }: DropdownMenuProps) {
    const [open, setOpen] = useState(false);

    return (
    <div className="relative inline-block">
        <Button
            onClick={() => setOpen(!open)}
            variant="btnHeader"
        >
            {mainLabel}
        </Button>

        {open && (
            <div className="absolute left-0 mt-2 w-[157px] bg-[#F4F4F4] shadow-lg rounded-[8px] px-2.5 py-2.5">
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
};

