import { EventEmitter } from '../../stencil-public-runtime';
export declare class SearchWorld {
  searchText: string;
  searchResult: {
    name: string;
    marketOpen: string;
  }[];
  userInput: string;
  onUserInput(event: Event): void;
  searchFromAPI(): void;
  searchWorldNameSelected: EventEmitter<string>;
  onRowClick(name: string): void;
  render(): any;
}
