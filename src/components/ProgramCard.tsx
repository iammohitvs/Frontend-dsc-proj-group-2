import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ArrowRight, EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { NavLink } from "react-router";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";

const ProgramCard = () => {
    return (
        <Card className="border-none shadow-sm shadow-primary hover:shadow-md hover:shadow-primary hover:scale-[1.01] hover:cursor-pointer transition-all">
            <CardHeader>
                <CardTitle className="flex flex-row justify-between items-center">
                    Program Name
                    <Popover>
                        <PopoverTrigger className="p-[2px] rounded-full hover:bg-gray-800 transition-all">
                            <EllipsisVertical />
                        </PopoverTrigger>
                        <PopoverContent className="dark text-white p-2 flex flex-col gap-2 w-[120px]">
                            <Dialog>
                                <DialogTrigger>
                                    <Button
                                        variant="secondary"
                                        className="w-full"
                                    >
                                        Edit Name <Pencil />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="dark text-white">
                                    <DialogHeader className="flex flex-col gap-4">
                                        <DialogTitle>
                                            Give us the new name of your program
                                        </DialogTitle>
                                        <DialogDescription>
                                            <form>
                                                <Input
                                                    defaultValue={"Program Name"}
                                                    type="text"
                                                    id="new-name"
                                                    name="new-name"
                                                    required
                                                />
                                            </form>
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <DialogClose>
                                            <Button
                                                variant="secondary"
                                                className="w-full"
                                            >
                                                Cancel
                                            </Button>
                                        </DialogClose>
                                        <DialogClose>
                                            <Button className="w-full">
                                                Submit
                                            </Button>
                                        </DialogClose>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            <AlertDialog>
                                <AlertDialogTrigger>
                                    <Button className="w-full">
                                        Delete <Trash2 />
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="dark text-white">
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            Are you sure you want to delete
                                            Program Name?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This
                                            will permanently delete your program
                                            and remove your data from our
                                            servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>
                                            Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction>
                                            Delete
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </PopoverContent>
                    </Popover>
                </CardTitle>
                <CardDescription>Written: 10th December 2024</CardDescription>
            </CardHeader>
            <CardContent className="h-[100px]">Program Language</CardContent>
            <CardFooter>
                <NavLink to="/code/exists/idofprogram">
                    <Button className="group w-full text-center">
                        Edit{" "}
                        <ArrowRight className="group-hover:translate-x-1 transition-all" />
                    </Button>
                </NavLink>
            </CardFooter>
        </Card>
    );
};

export default ProgramCard;
