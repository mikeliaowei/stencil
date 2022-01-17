export declare class MyCard {
  userName: string;
  APIData: string;
  showStencilTab: boolean;
  showReactTab: boolean;
  myStencilUsers: string;
  myReactUsers: string;
  componentWillLoad(): void;
  getStencilUserFromAPI(): void;
  getReactUserFromAPI(): void;
  fetchMyDataFromAPI(contentType: string): void;
  onContentChange(content: string): void;
  onUserInput(event: Event): void;
  searchWorldNameSelectedHandler(event: CustomEvent<string>): void;
  render(): any;
}
