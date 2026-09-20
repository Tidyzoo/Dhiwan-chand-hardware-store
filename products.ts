/**
 * PRODUCT CATALOGUE
 * -----------------
 * These are SAMPLE / PLACEHOLDER products that represent the kind of
 * range a bartan & hardware store typically carries. The owner can
 * edit this file to add real inventory later. No prices or brands are
 * shown — customers enquire directly with the store.
 */

export type CategoryId = "bartan" | "hardware" | "home" | "tools";

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  desc: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  isNew?: boolean;
  featured?: boolean;
}

export const CATEGORY_LABELS: Record<CategoryId, string> = {
  bartan: "Bartan & Kitchen",
  hardware: "Hardware",
  home: "Home Essentials",
  tools: "Tools",
};

export const PRODUCTS: Product[] = [
  {
    id: "steel-dinner-set",
    name: "Stainless Steel Dinner Set",
    category: "bartan",
    desc: "Classic steel thali, katori bowls, glass and spoons — a complete family serving set.",
    image: "/images/p-dinner-set.jpg",
    imageAlt: "Stainless steel Indian dinner set with thali, bowls and glass",
    keywords: ["steel utensils", "thali", "dinner set", "plates", "katori", "bartan", "serving"],
    isNew: true,
    featured: true,
  },
  {
    id: "pressure-cooker",
    name: "Pressure Cooker",
    category: "bartan",
    desc: "Everyday aluminium pressure cooker in popular household sizes for daily cooking.",
    image: "/images/p-cooker.jpg",
    imageAlt: "Aluminium pressure cooker on a neutral background",
    keywords: ["pressure cooker", "cooker", "cooking", "kitchen", "aluminium"],
    featured: true,
  },
  {
    id: "steel-bowl-serving-set",
    name: "Steel Bowls & Serving Set",
    category: "bartan",
    desc: "Mixing, serving and storage bowls in stainless steel for everyday kitchen use.",
    image:
      "https://images.pexels.com/photos/31109993/pexels-photo-31109993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Stainless steel mixing and serving bowls",
    keywords: ["steel utensils", "bowls", "serving set", "kitchen", "bartan"],
    featured: true,
  },
  {
    id: "steel-patila-pots",
    name: "Steel Patila & Pot Range",
    category: "bartan",
    desc: "Sturdy steel patilas and cooking pots in assorted capacities for the home kitchen.",
    image:
      "https://images.pexels.com/photos/28726706/pexels-photo-28726706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Stack of shiny stainless steel cooking pots",
    keywords: ["steel utensils", "patila", "pots", "cooking", "bartan", "kitchen"],
    featured: true,
  },
  {
    id: "cookware-tawa-pans",
    name: "Tawa, Frying Pans & Cookware",
    category: "bartan",
    desc: "Tawas, frying pans and everyday cookware for rotis, sabzi and more.",
    image:
      "https://images.pexels.com/photos/4509047/pexels-photo-4509047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Steel and copper cookware hanging in a kitchen",
    keywords: ["frying pan", "tawa", "cookware", "kadhai", "cooking", "kitchen"],
  },
  {
    id: "hand-tool-kit",
    name: "Hand Tool Kit",
    category: "tools",
    desc: "A practical starter set — hammer, wrench, pliers and screwdrivers for home repairs.",
    image: "/images/p-hand-tools.jpg",
    imageAlt: "Hand tool set with hammer, wrench, pliers and screwdrivers",
    keywords: ["tools", "tool kit", "hammer", "screwdriver", "pliers", "repair"],
    isNew: true,
    featured: true,
  },
  {
    id: "spanners-wrenches",
    name: "Spanners & Wrenches",
    category: "tools",
    desc: "Combination spanners and adjustable wrenches in common sizes for household jobs.",
    image:
      "https://images.pexels.com/photos/6789020/pexels-photo-6789020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Assorted spanners and wrenches on a dark surface",
    keywords: ["tools", "wrench", "spanner", "hardware", "repair", "adjustable"],
    featured: true,
  },
  {
    id: "measuring-marking",
    name: "Measuring & Marking Tools",
    category: "tools",
    desc: "Measuring tapes and marking essentials for accurate work around the house.",
    image:
      "https://images.pexels.com/photos/5974028/pexels-photo-5974028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Tape measure with carpentry tools on a workbench",
    keywords: ["tools", "measuring tape", "marking", "workshop", "carpentry"],
  },
  {
    id: "carpentry-repair-tools",
    name: "Workshop & Repair Tools",
    category: "tools",
    desc: "Everyday workshop and carpentry tools for fixing, fitting and small projects.",
    image:
      "https://images.pexels.com/photos/5974022/pexels-photo-5974022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Carpentry and repair tools on a workbench",
    keywords: ["tools", "workshop", "carpentry", "repair", "woodwork"],
  },
  {
    id: "nuts-bolts-fasteners",
    name: "Nuts, Bolts & Fasteners",
    category: "hardware",
    desc: "Common-size nuts, bolts and fasteners for repairs, fittings and small projects.",
    image:
      "https://images.pexels.com/photos/17372998/pexels-photo-17372998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Close-up of metal screws, nuts and bolts",
    keywords: ["hardware", "nuts", "bolts", "fasteners", "screws", "repair"],
    featured: true,
  },
  {
    id: "hardware-fittings",
    name: "Assorted Hardware Fittings",
    category: "hardware",
    desc: "Hinges, brackets, hooks and general fittings for doors, shelves and fixtures.",
    image: "/images/cat-hardware.jpg",
    imageAlt: "Flat lay of assorted hardware fittings, hinges and brackets",
    keywords: ["hardware", "fittings", "hinges", "brackets", "door", "fixtures"],
    isNew: false,
  },
  {
    id: "screws-fixings",
    name: "Screws & Fixings",
    category: "hardware",
    desc: "Wood screws, wall fixings and everyday fastening essentials by weight or pack.",
    image:
      "https://images.pexels.com/photos/259968/pexels-photo-259968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Close-up of metal screws on a reflective surface",
    keywords: ["hardware", "screws", "fixings", "fasteners", "nails"],
  },
  {
    id: "padlocks-security",
    name: "Padlocks & Gate Hardware",
    category: "hardware",
    desc: "Padlocks, chains and basic gate hardware for home and shop security.",
    image:
      "https://images.pexels.com/photos/6534898/pexels-photo-6534898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Padlock securing a metal gate with a chain",
    keywords: ["hardware", "padlock", "lock", "security", "chain", "gate"],
  },
  {
    id: "kitchen-storage-containers",
    name: "Kitchen Storage Containers",
    category: "home",
    desc: "Stackable containers and jars to keep grains, masalas and dry goods organised.",
    image:
      "https://images.pexels.com/photos/4096909/pexels-photo-4096909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Stacked kitchen storage containers",
    keywords: ["storage", "containers", "kitchen", "jars", "organiser", "home essentials"],
    isNew: true,
    featured: true,
  },
  {
    id: "household-storage-organisers",
    name: "Household Storage & Organisers",
    category: "home",
    desc: "Boxes, baskets and organisers that keep every room tidy and clutter-free.",
    image:
      "https://images.pexels.com/photos/3912297/pexels-photo-3912297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt: "Minimal white household storage boxes",
    keywords: ["storage", "organiser", "boxes", "home essentials", "baskets", "household"],
  },
  {
    id: "household-utility-range",
    name: "Everyday Household Utility",
    category: "home",
    desc: "Buckets, jugs, mugs and daily-use utility items every household needs.",
    image: "/images/cat-home.jpg",
    imageAlt: "Household utility items including buckets, jugs and containers",
    keywords: ["home essentials", "bucket", "jug", "utility", "household", "daily use"],
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured);
