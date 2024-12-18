import { ArrowLeftCircle, BookMarked, Play } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-row justify-between p-3">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => navigate(-1)}
                        >
                            <ArrowLeftCircle className="hover:cursor-pointer" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Back</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <Input
                className="w-[400px] rounded-lg"
                placeholder="name your program..."
            />

            <div className="flex flex-row gap-2">
                <Button size="lg" variant="secondary" className="rounded-lg">
                    Save to Workspace
                    <BookMarked size={20} />
                </Button>
                <Button size="lg" variant="default" className="rounded-lg">
                    Run <Play size={20} />
                </Button>
            </div>
        </div>
    );
};

export default Header;
