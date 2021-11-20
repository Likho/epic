initSidebarItems({"fn":[["from_slice",""],["read_exact","The default implementation of read_exact is useless with an async stream (TcpStream) as it will return as soon as something has been read, regardless of whether the buffer has been filled (and then errors). This implementation will block until it has read exactly `len` bytes and returns them as a `vec<u8>`. Except for a timeout, this implementation will never return a partially filled buffer."],["write_all","Same as `read_exact` but for writing."]]});