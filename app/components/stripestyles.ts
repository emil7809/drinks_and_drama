const CardStyle = {
    style: {
        base: {
            fontFamily: "Lato, sans-serif",
            fontSize: "1.2rem",
            fontWeight: "300",
            color: "white",
            textAlign: "left",
            textShadow: "1px 1px 6px rgba(0, 0, 0, 0.8)",

            "::placeholder": {
                color: "rgba(255, 255, 255, 0.6)", // Slightly dimmed white
            },

            /* ✅ Matches your shipping form */
            backgroundColor: "transparent",
            border: "none",
            width: "100%",
        },

        invalid: {
            color: "#FF6B6B",
        },
    },
};

export default CardStyle;
