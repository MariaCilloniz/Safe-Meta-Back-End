const trustMetrics = {
    dataTransparency: {
        dataCollected: {
            categories: ["Location", "Activity Logs", "Ad Preferences"],
            usagePercentages: [40, 60, 20], 
            optOutOptions: {
                personalizedAds: true, 
                activityTracking: false, 
                locationTracking: false, 
            },
        },
    },
    privacyGrade: {
        score: 85,
    },
};

const getTrustMetrics = (_req, res) => {
    try {
        res.status(200).json(trustMetrics);
    } catch (error) {
        console.error("Error fetching Trust Metrics:", error);
        res.status(500).send("Internal Server Error");
    }
};

export { getTrustMetrics };