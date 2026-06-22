export const features =[
    "20,000+ of PNG & SVG graphics",
    "Access to 100 million stock images",
    "Upload custom icons and fonts",
    "Unlimited Sharing",
    "Upload graphics & video in up to 4k",
    "Unlimited Projects",
    "Instant Access to our design system",
    "Create teams to collaborate on designs"
]

export const pricingPlans = [
    {
        id: 1,
        title: "Freebie",
        monthlyPrice: 100,
        yearlyPrice: 1100,
        highlighted: false,
        description: "Ideal for individuals who need quick access to basic features.",
        permissions: [true,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
        ]
    },

    {
        id: 2,
        title: "Professional",
        monthlyPrice: 250,
        yearlyPrice: 2550,
        highlighted: true,
        description: "Ideal for individuals who who need advanced features and tools for client work.",
        permissions: [
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
        ]
    },

    {
        id: 3,
        title: "Enterprise",
        monthlyPrice: 500,
        yearlyPrice: 5500,
        highlighted: false,
        description: "Ideal for businesses who need personalized services and security for large teams.",
        permissions: [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
        ]
    }
]