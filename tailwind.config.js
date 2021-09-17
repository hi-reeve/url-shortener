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
                    "grayish-light": "var(--grayish-violet-light)",
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
            backgroundImage: {
                "shorten-desktop":
                    "url('/src/assets/images/bg-shorten-desktop.svg')",
                "shorten-mobile":
					"url('/src/assets/images/bg-shorten-mobile.svg')",
				"boost-desktop" : "url('/src/assets/images/bg-boost-desktop.svg')",
				"boost-mobile" : "url('/src/assets/images/bg-boost-mobile.svg')",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
