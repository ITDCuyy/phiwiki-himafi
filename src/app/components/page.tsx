"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Badge } from "~/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { Combobox } from "~/components/ui/combobox";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "~/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import { Progress } from "~/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { Skeleton } from "~/components/ui/skeleton";
import { Toaster } from "~/components/ui/sonner";
import { Switch } from "~/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Textarea } from "~/components/ui/textarea";
import { Toggle } from "~/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";
import { Bold, ChevronsUpDown, Italic, Underline } from "lucide-react";
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { toast } from "sonner";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export default function HomePage() {
  const [comboboxValue, setComboboxValue] = React.useState("");
  const [progress, setProgress] = React.useState(13);
  const [switchChecked, setSwitchChecked] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  };

  const showcases = [
    {
      title: "Alert",
      components: [
        <Alert key="al1">
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>,
        <Alert key="al2" variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>,
      ],
    },
    {
      title: "Navigation Menu",
      components: [
        <NavigationMenu key="nm1">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem
                    href="/docs/primitives/alert-dialog"
                    title="Alert Dialog"
                  >
                    A modal dialog that interrupts the user with important
                    content and expects a response.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/hover-card"
                    title="Hover Card"
                  >
                    For sighted users to preview content available behind a
                    link.
                  </ListItem>
                  <ListItem href="/docs/primitives/progress" title="Progress">
                    Displays an indicator showing the completion progress of a
                    task, typically displayed as a progress bar.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/scroll-area"
                    title="Scroll-area"
                  >
                    Visually or semantically separates content.
                  </ListItem>
                  <ListItem href="/docs/primitives/tabs" title="Tabs">
                    A set of layered sections of content—known as tab
                    panels—that are displayed one at a time.
                  </ListItem>
                  <ListItem href="/docs/primitives/tooltip" title="Tooltip">
                    A popup that displays information related to an element when
                    the element receives keyboard focus or the mouse hovers over
                    it.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>,
      ],
    },
    {
      title: "Sidebar",
      components: [
        <div
          key="s1"
          className="relative h-[500px] w-full overflow-hidden rounded-lg border bg-background"
        >
          <SidebarProvider>
            <Sidebar>
              <SidebarHeader>
                <SidebarTrigger />
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Home</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Users</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Settings</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarContent>
              <SidebarFooter>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Logout</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
            </Sidebar>
            <main className="space-y-4 p-4">
              <SidebarTrigger>
                <Button>Toggle Sidebar</Button>
              </SidebarTrigger>
              <h1 className="text-xl font-semibold">Main Content</h1>
              <p>This is the main content area next to the sidebar.</p>
            </main>
          </SidebarProvider>
        </div>,
      ],
    },
    {
      title: "Carousel",
      components: [
        <Carousel className="w-full max-w-xs" key="ca1">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>,
      ],
    },
    {
      title: "Chart",
      components: [
        <ChartContainer
          key="ch1"
          config={chartConfig}
          className="min-h-[200px] w-full"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>,
      ],
    },
    {
      title: "Aspect Ratio",
      components: [
        <AspectRatio key="ar1" ratio={16 / 9} className="bg-muted">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>,
      ],
    },
    {
      title: "Badge",
      components: [
        <Badge key="ba1">Badge</Badge>,
        <Badge key="ba2" variant="secondary">
          Secondary
        </Badge>,
        <Badge key="ba3" variant="outline">
          Outline
        </Badge>,
        <Badge key="ba4" variant="destructive">
          Destructive
        </Badge>,
      ],
    },
    {
      title: "Button",
      components: [
        <Button key="b1">Button</Button>,
        <Button key="b2" variant="secondary">
          Secondary Button
        </Button>,
        <Button key="b3" variant="destructive">
          Destructive Button
        </Button>,
        <Button key="b4" variant="outline">
          Outline Button
        </Button>,
        <Button key="b5" variant="ghost">
          Ghost Button
        </Button>,
        <Button key="b6" variant="link">
          Link Button
        </Button>,
        <Button key="b7" disabled>
          Disabled Button
        </Button>,
        <Button
          key="b8"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Show Toast
        </Button>,
      ],
    },
    {
      title: "Breadcrumb",
      components: [
        <Breadcrumb key="bc1">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>,
      ],
    },
    {
      title: "Checkbox",
      components: [
        <div key="cb1" className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>,
      ],
    },
    {
      title: "Collapsible",
      components: [
        <Collapsible key="co1" className="w-[350px] space-y-2">
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md px-4 py-2 font-mono text-sm shadow-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md px-4 py-2 font-mono text-sm shadow-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>,
      ],
    },
    {
      title: "Combobox",
      components: [
        <Combobox
          key="cb1"
          options={frameworks}
          value={comboboxValue}
          onChange={setComboboxValue}
          placeholder="Select framework..."
          searchPlaceholder="Search framework..."
          emptyPlaceholder="No framework found."
        />,
      ],
    },
    {
      title: "Context Menu",
      components: [
        <ContextMenuTrigger
          key="cm1"
          className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
        >
          Right-click here
          <ContextMenuContent>
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Billing</ContextMenuItem>
            <ContextMenuItem>Team</ContextMenuItem>
            <ContextMenuItem>Subscription</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenuTrigger>,
      ],
    },
    {
      title: "Dialog",
      components: [
        <Dialog key="di1">
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
          </DialogContent>
        </Dialog>,
      ],
    },
    {
      title: "Drawer",
      components: [
        <Drawer key="dr1">
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>,
      ],
    },
    {
      title: "Dropdown Menu",
      components: [
        <DropdownMenu key="dm1">
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      ],
    },
    {
      title: "Hover Card",
      components: [
        <HoverCard key="hc1">
          <HoverCardTrigger>Hover</HoverCardTrigger>
          <HoverCardContent>
            The React Framework – created and maintained by @vercel.
          </HoverCardContent>
        </HoverCard>,
      ],
    },
    {
      title: "Input",
      components: [
        <Input key="in1" type="email" placeholder="Email" />,
        <div key="in2" className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>,
      ],
    },
    {
      title: "Label",
      components: [
        <div key="la1">
          <Label htmlFor="email">Your email address</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>,
      ],
    },
    {
      title: "Pagination",
      components: [
        <Pagination key="pa1">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>,
      ],
    },
    {
      title: "Progress",
      components: [<Progress key="pr1" value={progress} className="w-[60%]" />],
    },
    {
      title: "Radio Group",
      components: [
        <RadioGroup key="rg1" defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>,
      ],
    },
    {
      title: "Scroll Area",
      components: [
        <ScrollArea key="sa1" className="h-[200px] w-[350px] rounded-md p-4">
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king&apos;s pillow, in his
          soup, even in the royal toilet. The king was furious, but he
          couldn&apos;t seem to stop Jokester. And then, one day, the people of
          the kingdom discovered that the jokes left by Jokester were so funny
          that they couldn&apos;t help but laugh. And once they started
          laughing, they couldn&apos;t stop.
        </ScrollArea>,
      ],
    },
    {
      title: "Separator",
      components: [
        <div key="se1">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">
              Radix Primitives
            </h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>,
      ],
    },
    {
      title: "Skeleton",
      components: [
        <div key="sk1" className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>,
      ],
    },
    {
      title: "Switch",
      components: [
        <div key="sw1" className="flex items-center space-x-2">
          <Switch
            id="airplane-mode"
            checked={switchChecked}
            onCheckedChange={setSwitchChecked}
          />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>,
      ],
    },
    {
      title: "Table",
      components: [
        <Table key="ta1">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      ],
    },
    {
      title: "Tabs",
      components: [
        <Tabs key="ts1" defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>,
      ],
    },
    {
      title: "Textarea",
      components: [
        <Textarea key="te1" placeholder="Type your message here." />,
        <div key="te2" className="grid w-full gap-1.5">
          <Label htmlFor="message-2">Your Message</Label>
          <Textarea placeholder="Type your message here." id="message-2" />
          <p className="text-sm text-muted-foreground">
            Your message will be copied to the support team.
          </p>
        </div>,
      ],
    },
    {
      title: "Toggle",
      components: [
        <Toggle key="to1" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>,
        <Toggle key="to2" variant="outline" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>,
      ],
    },
    {
      title: "Toggle Group",
      components: [
        <ToggleGroup key="tg1" type="multiple">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>,
      ],
    },
    {
      title: "Tooltip",
      components: [
        <TooltipProvider key="tt1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>,
      ],
    },
    {
      title: "Card",
      components: [
        <Card key="c1">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
            ipsum auctor, malesuada metus quis, auctor ipsum. Sed ullamcorper,
            leo id facilisis auctor, lectus nunc dictum nunc, euismod malesuada
            nunc lacus ut velit.
          </CardContent>
          <CardFooter>
            <Button variant="outline">Learn More</Button>
          </CardFooter>
        </Card>,
        <Card key="c2">
          <CardHeader>
            <CardTitle>Plan Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Pro Plan</h4>
                <p className="text-sm text-muted-foreground">
                  For growing businesses
                </p>
              </div>
              <span className="font-bold">$29/mo</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Upgrade to Pro
            </Button>
          </CardFooter>
        </Card>,
        <Card key="c3" className="max-w-[400px]">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="first-name" className="text-right">
                  First Name
                </Label>
                <Input id="first-name" value="Pedro" className="col-span-2" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="last-name" className="text-right">
                  Last Name
                </Label>
                <Input id="last-name" value="Duarte" className="col-span-2" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  value="pedro.duarte@example.com"
                  className="col-span-2"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Save Changes
            </Button>
          </CardFooter>
        </Card>,
      ],
    },
    {
      title: "Accordion",
      components: [
        <Accordion key="a1" type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern and supports
              keyboard navigation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>,
        <Accordion key="a2" type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
            <AccordionContent>
              Yes! This accordion allows multiple items to be open at the same
              time. Try opening multiple sections.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What about styling?</AccordionTrigger>
            <AccordionContent>
              The accordion is fully customizable and follows your design
              system&apos;s color scheme.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Does it support rich content?</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p>Yes, you can include any React components inside:</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>Lists like this one</li>
                  <li>Images and media</li>
                  <li>Interactive elements</li>
                </ul>
                <Button size="sm" variant="outline">
                  Even buttons!
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>,
        <Accordion
          key="a3"
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>🔧 General Settings</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Enable notifications</span>
                  <Button size="sm" variant="outline">
                    Toggle
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Dark mode</span>
                  <Button size="sm" variant="outline">
                    Toggle
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Auto-save</span>
                  <Button size="sm" variant="outline">
                    Enabled
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>🔒 Privacy Settings</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Public profile</span>
                  <Button size="sm" variant="destructive">
                    Private
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Data collection</span>
                  <Button size="sm" variant="outline">
                    Minimal
                  </Button>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your privacy settings are configured for maximum security.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>📊 Advanced Options</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p className="text-sm font-medium">Performance Settings:</p>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>Hardware acceleration: Enabled</li>
                  <li>Memory usage: Optimized</li>
                  <li>Background sync: Every 5 minutes</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>,
        <Accordion key="a4" type="single" collapsible className="w-full">
          <AccordionItem value="features">
            <AccordionTrigger>✨ Key Features</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  Responsive Design
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  Dark Mode Support
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                  TypeScript Ready
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                  Fully Accessible
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pricing">
            <AccordionTrigger>💰 Pricing Plans</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div className="rounded-lg border border-gray-200 p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Free Plan</h4>
                      <p className="text-sm text-muted-foreground">
                        Perfect for getting started
                      </p>
                    </div>
                    <span className="font-bold">$0/mo</span>
                  </div>
                </div>
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Pro Plan</h4>
                      <p className="text-sm text-muted-foreground">
                        For growing businesses
                      </p>
                    </div>
                    <span className="font-bold">$29/mo</span>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="support">
            <AccordionTrigger>🎧 Support & Help</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p className="text-sm">Need help? We&apos;re here for you:</p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline">
                    📧 Email Support
                  </Button>
                  <Button size="sm" variant="outline">
                    💬 Live Chat
                  </Button>
                  <Button size="sm" variant="outline">
                    📚 Documentation
                  </Button>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Average response time: 2 hours
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>,
      ],
    },
  ];

  return (
    <main className="min-h-screen w-full bg-slate-900 p-4 text-gray-50">
      <div className="container mx-auto px-20 py-8">
        <Toaster />
        <ContextMenu>
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
            {showcases.map((showcase) => (
              <Card
                key={showcase.title}
                // className="rounded-xl border border-slate-700 bg-slate-800/50 p-6"
              >
                <CardHeader>
                  <h1 className="text-center text-2xl font-bold text-blue-100">
                    {showcase.title}
                  </h1>
                </CardHeader>
                <CardContent className="grid grid-cols-1 items-start justify-center gap-8 2xl:grid-cols-2">
                  {showcase.components}
                </CardContent>
              </Card>
            ))}
          </div>
        </ContextMenu>
      </div>
    </main>
  );
}
