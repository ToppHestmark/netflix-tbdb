# NETFLIX

[Demo App](https://netflix-tmdb.firebaseapp.com/)

Netflix banner and movie cards with data from TMDb API.
User might experience delay on download due huge file-size of images from the server.
Illustrating the banners as Netflix and show YouTube trailer of the selected poster onClick if url is available on the selected post.

### Issue:

Overflow-x didn't seems to work on Firefox for some reasen, but works perfectly on google Chrome.
Reference, [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Debug_Scrollable_Overflow)

Dependencies:

- [Axios](https://www.npmjs.com/package/axios)
- [Styled-components](https://styled-components.com/)
- [react-youtube](https://www.npmjs.com/package/react-youtube) (Youtube movie-trailer onClick only if available URL)
- [movie-trailer](https://www.npmjs.com/package/movie-trailer)

![Screenshot](./src/images/screenshot.png)
