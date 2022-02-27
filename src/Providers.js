import React from "react";
import App from "./App";
import { ResetCSS } from "./global/resetCSS";
import PokemonProvider from "./context/pokemon";

export default function Providers() {
    return (
        <main>
            <PokemonProvider>
                <ResetCSS />
                <App />
            </PokemonProvider>
        </main>
    )
}