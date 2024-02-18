import { IAppState } from "../../state/app.state";

export const livrosSelectors = (appState: IAppState) => {
    return appState.livros.livros;
}