# Morbidelli Website Design System

This document outlines the core design language, typography, and color palette established for the Morbidelli Serbia website redesign. 

## 1. Core Principles
- **Aesthetic**: Premium, sleek, dynamic, and light-themed.
- **Vibe**: Performance-oriented, sporty yet refined ("Racing Heritage. Street Born").
- **Contrast**: High contrast using pure whites, deep blacks, and striking brand accent colors.

## 2. Color Palette
The primary background of the application is **White (#FFFFFF)** with **Black (#000000)** text to ensure high readability and a clean modern aesthetic.

### Brand Colors:
- **Primary Background (White)**: `#FFFFFF`
- **Primary Text (Black)**: `#000000`
- **Accent Cyan**: `#5ACCF0` - Used for primary actions, floating buttons, newsletter background, hover states, and important highlights.
- **Accent Red**: `#FF212A` - Used for secondary actions (e.g., play button floating on the right) and brand identity elements (racing stripes).

### Gradients:
For sections where text overlay is required over images (e.g., Featured Models split screen), a subtle dark gradient is used to guarantee text contrast while keeping the rest of the layout bright.

## 3. Typography
The website exclusively utilizes the custom **Replica** font family, breaking away from standard system fonts to achieve a highly tailored and recognizable brand identity.

- **Primary Heading Font**: `Replica-Bold` (CSS variable: `--font-replica`)
- **Body & Subheading Font**: `Replica-Light` (CSS variable: `--font-replica-light`)

### Usage Rules:
- **Headings (H1, H2, H3)**: Bold and Light variants are often mixed. For example, "Engineered for the **Bold**" mixes `Replica-Light` with `Replica-Bold` for emphasis.
- **Navigation & Small Caps**: `Replica-Light` with tracking (letter spacing).
- **Buttons**: `Replica-Bold` to ensure clear calls to action.

## 4. Key Layout Components

### Header
- Fixed at the top (`fixed z-50`).
- Transparent when at the very top of the page (overlapping the video hero).
- Morphs into a solid white header with a subtle shadow (`bg-white shadow-md py-3`) when scrolled.

### Hero Section
- **Background**: Full viewport height (`h-screen`) video (`hero-teaser.mp4`).
- **Overlay**: Subtle dark overlay (`bg-black/30`) to ensure white text readability.
- **Action Buttons**: Floating Cyan and Red circular action buttons pinned vertically to the middle right edge of the screen.

### Featured Models
- **Split View**: 50/50 horizontal split (stacking vertically on mobile). Uses large immersive imagery with text anchored to the bottom.
- **Grid Layout**: A 2-column clean white block with striking black text and hover animations indicating interactivity (`View More >>`).

### Newsletter Module
- Minimalistic block featuring brand Cyan as the primary submit button and section heading text.

### Footer
- **Background**: White with a very faint, oversized watermark of the Morbidelli Heritage Icon.
- **Layout**: Four distinct columns separating corporate, customer service, and group company links.
- **Branding**: Contains the "Beyond the Ride" logo block and Keeway Group copyright details centered at the bottom.

## 5. Micro-Animations & Interactions
- **Hover Effects**: All standard links and "View More >>" texts transition to the Accent Cyan (`#5ACCF0`) on hover.
- **Buttons**: Play buttons and floating icons use a `scale-110` transform effect to feel dynamic.
- **Selection**: Text selection highlight is custom set to Cyan background with White text.
- **Scrollbar**: Customized sleek scrollbar mimicking the brand aesthetic.
