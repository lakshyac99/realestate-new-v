export const createListingSlice = (set, get) => ({
  wishlists: [],
  setWishLists: (wishlists) => set({ wishlists }),
  wishListsPage: [],
  setWishListsPage: (wishListsPage) => set({ wishListsPage }),
  addToWishList: (id) => {
    const lists = get().wishlists;
    lists.push(id);
    // console.log({ lists });
    set({ wishlists: lists });
  },
  removeFromWishList: () => {},
  currentListing: undefined,
  setCurrentListing: (currentListing) => set({ currentListing }),
  removeUserListing: (listing) => {
    const listings = get().userListings;
    const index = listings.findIndex((list) => list.id === listing);
    if (index !== -1) {
      listings.splice(index, 1);
    }
    set({ userListings: listings });
  },
  isMapView: false,
  listings: [],
  showSchedulerBar: false,
  userListings: [],
  setUserListings: (userListings) => set({ userListings }),
  setIsMapView: () => {
    set({ isMapView: !get().isMapView });
  },
  setInitialView: () => {
    set({ isMapView: false });
  },
  setListings: (listings) => {
    set({ listings });
  },
  setShowScheduleBar: () => {
    set({ showScheduleBar: !get().showScheduleBar });
  },
});
