import {
    ComputeFeatures,
    CorporaInfo,
    FeatureInfo,
    Home,
    Usage
} from "./pages";


export const routes = [
    {
        path: "/",
        label: "Home",
        exact: true,
        child: Home
    },
    {
        path: "/compute-features",
        label: "Compute Features",
        exact: true,
        child: ComputeFeatures
    },
    {
        path: "/feature-info",
        label: "Feature Information",
        exact: true,
        child: FeatureInfo
    },
    {
        path: "/corpora-info",
        label: "Corpora Information",
        exact: true,
        child: CorporaInfo
    },
    {
        path: "/usage",
        label: "What can sentence embeddings be used for?",
        exact: true,
        child: Usage
    }
];
