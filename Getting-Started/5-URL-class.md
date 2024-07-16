# URL class 

### Key Concepts from the Node.js URL Module

1. **WHATWG URL API**: A modern standard for handling URLs.

The WHATWG (Web Hypertext Application Technology Working Group) URL standard defines how web browsers and other software should interpret and handle URLs. It standardizes parsing, constructing, and manipulating URLs, ensuring consistent behavior across different platforms and applications. This includes defining the structure of URLs (scheme, host, path, query, fragment) and the methods to access and modify these parts.

For detailed information, refer to the [WHATWG URL specification](https://url.spec.whatwg.org/).

2. **URL Class**:
   - **Constructor**: `new URL(input[, base])` creates a URL object.
   - **Properties**: 
     - `href`: Full URL string.
     - `protocol`: URL protocol (`http:`, `https:`, etc.).
     - `host`: Hostname and port (`example.com:8080`).
     - `hostname`: Hostname (`example.com`). 
     - `port`: Port number.
     - `pathname`: Path (`/path/page`).
     - `search`: Query string (`?query=1`).
     - `hash`: Fragment (`#section`).

     The key difference between url.host and url.hostname is that url.hostname does not include the port.
3. **Methods**:
   - `toString()`: Returns the URL as a string.
   - `toJSON()`: Returns the URL as a JSON object.

For more information, refer to the [Node.js URL module documentation](https://nodejs.org/api/url.html#url_the_whatwg_url_api).

