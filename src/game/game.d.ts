declare module '@/game/game' {
    export class Game {
        constructor();
        init(element: HTMLElement, width: number, height: number): void;
        processTextInput(text: string): void;
        isReady(): boolean;
        focus(): void;
        // Add any other methods, properties, or constructors of the Game class here
    }
}