module.exports = {
    mode: "jit",
    purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                violet: {
                    grayish: "var(--grayish-violet)",
                    dark: "var(--dark-violet)",
                    "very-dark": "var(--very-dark-violet)",
                },
                "custom-cyan": {
                    DEFAULT: "var(--cyan)",
                },
                "custom-red": {
                    DEFAULT: "var(--red)",
                },
                "custom-gray": {
                    DEFAULT: "var(--gray)",
                },
                "custom-blue": {
                    "very-dark": "var(--very-dark-blue)",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
