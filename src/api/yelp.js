import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer udiaa6uy2XfzL12w-f_MFURw6vavj7-tycgNlD7XTxNnWblVdOIuVcdacDQoci5zDGHLgHE7bUXbV_htRvMBB9X70HyUC9rGVN6q3hT7wVFcmpnGoPfqhNsaX0UQZHYx",
  },
});
