"use strict";
(() => {
var exports = {};
exports.id = 133;
exports.ids = [133,5492];
exports.modules = {

/***/ 5933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ formatDate)
/* harmony export */ });
function formatDate(dateString) {
    return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC"
    });
}


/***/ }),

/***/ 5492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "meta": () => (/* binding */ meta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__]);
_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*@jsxRuntime automatic @jsxImportSource react*/ 

const meta = {
    author: "edward",
    date: "2023-06-29",
    title: "introducing-to-https-ssl",
    description: "introducing-to-https-ssl"
};
const MDXLayout = (props)=>react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__/* .ArticleLayout */ .B, Object.assign({
        meta: meta
    }, props));
function _createMdxContent(props) {
    const _components = Object.assign({
        h2: "h2",
        ul: "ul",
        li: "li",
        ol: "ol",
        strong: "strong",
        p: "p",
        em: "em",
        h3: "h3",
        a: "a"
    }, props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "写在前面"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "基础(重要)：加密必须有两部分，密钥 + 算法，如果再多加一个，就是完整性校验",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "\n先来了解下https 中ssl(Secure Sockets Layer)通道的建立,现在，SSL 已经被 TLS（Transport Layer Security）协议所取代，但是人们仍然习惯性地使用 SSL 这个词来指代这种类型的加密连接。"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "第一步：双方身份校验"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Client 发起ssl 连接请求，server 发送",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "公钥证书"
                            }),
                            "给client"
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "C通过内置的根证书校验该证书是否可信，如果当前认证需要双向进行（经常发生于某些企业环境）,则此时客户端也需要向服务器发送其证书"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Server如果也承认client 的证书有效(如果是双向认证)，则可以建立连接"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "第二步：沟通加密算法，交换对称加密的密钥"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "这一步的目的是沟通数据传输所用的对称加密的密钥和算法，为了达到这个目的，，先的用非对称加密来交换数据"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "part1 :  此时我们已经有了证书中的公钥，需要沟通缺少的信息\n于是client 发送协商请求(ClientHello)给server，包含",
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "非对称加密的密钥交换算法 ，一般是rsa"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "数据签名摘要算法，SHA（Secure Hash Algorithm）和MD5（Message Digest Algorithm 5）是两种常见的摘要算法，它们可以将任意长度的数据映射到一个固定长度的摘要。但是，由于已知的安全问题，现在已经不推荐使用MD5了。在TLS 1.2及以后的版本中，也引入了更多的摘要算法，例如SHA-256和SHA-384等。（验证数据完整性和来源）"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "加密传输数据的对称加密算法，DES由于其密钥长度较短，现在已经被认为是不安全的，因此不推荐使用。AES是目前最广泛使用的对称加密算法，而ChaCha20则在移动设备上有更好的性能"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "加密密钥的长度  密钥的长度直接影响到加密的安全性。一般来说，密钥越长，破解的难度就越大。但是，密钥越长，加密和解密的过程也就越耗时。因此，需要在安全性和性能之间找到一个平衡。对于AES算法，常见的密钥长度有128位、192位和256位。"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "在收到”ClientHello”消息后，服务器会从中选择一组参数，然后在”ServerHello”消息中回复给客户端。这样，客户端和服务器就协商出了一组共享的参数，可以开始安全的通信了"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "2",
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "part2 : 通过part1选择的算法，交换一个随机字符串作为对称加密的密钥，传给server,这个过程通常是这样的：",
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "客户端生成随机数：客户端生成一个随机数，这个随机数就是将要使用的对称加密的密钥（也称为”premaster secret”）。"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "客户端使用服务器的公钥加密随机数：客户端使用在SSL握手过程的第一步中从服务器获取的公钥(即证书中的公钥)，将这个随机数进行加密。"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "客户端将加密后的随机数发送给服务器：客户端通过网络将这个加密后的随机数发送给服务器。"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "服务器使用私钥解密：服务器使用它的私钥，解密客户端发送过来的信息，获取到原始的随机数（即对称加密的密钥）。"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "第三步，数据传输"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "在前两步中，客户端和服务器已经完成了身份验证和密钥交换，因此已经建立了一个安全的通道。这个通道能够保证数据的机密性、完整性和真实性。后续所有的传输，都是用上面约定好了的对称加密算法和密钥"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "数据的分段"
                            }),
                            "：客户端和服务器的通信数据会被分成一段段的块。这是因为处理小块的数据比处理大块的数据更有效率，也可以更好地管理网络带宽。"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "数据的压缩"
                            }),
                            "：为了节省带宽和提高传输速度，数据可能会被压缩。不过这取决于客户端和服务器在握手阶段协商的结果，因为不是所有的HTTPS连接都使用数据压缩。"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "应用层数据的加密"
                            }),
                            "：应用层的数据（例如HTTP请求和响应）会使用在握手阶段协商的对称加密算法和密钥进行加密。这确保了数据在传输过程中的机密性。"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "记录协议的处理"
                            }),
                            "：加密的数据块会被封装在一个记录协议的数据结构中。这个数据结构包括了该数据块的一些信息，例如数据块的长度和数据块的类型（例如，是不是应用数据，还是一些其他的信息）。"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "完整性检查和认证"
                            }),
                            "：在每个数据块的末尾，会添加一个",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                                children: "MAC"
                            }),
                            "（Message Authentication Code，消息认证码）。这个MAC是使用会话密钥和整个数据块计算出来的，可以用来检查数据在传输过程中是否被篡改。 具体来说，服务器和客户端会对传输的数据进行哈希运算（单向），生成一个摘要，然后用对称加密的密钥对这个摘要进行加密，将加密后的摘要一同发送给对方。接收方在接收到数据后，会进行同样的哈希运算，然后用同样的对称密钥进行解密，比较解密后的摘要和自己计算的摘要是否一致，从而验证数据是否在传输过程中被篡改。"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "数据的发送"
                            }),
                            "：完成以上步骤后，数据就可以通过网络发送给对方了。接收方会进行以上步骤的逆操作，例如验证MAC、解密数据、解压数据等，以获取原始的应用层数据。"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "以上就是HTTPS的”数据传输”阶段的具体过程。这个过程确保了数据在传输过程中的",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "机密性、完整性和真实性."
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "htttps可以防止重放攻击"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "SSL使用序列号来保护通讯方免受报文重放攻击。这个序列号被加密后作为数据包的负载。在整个SSL握手中,都有一个唯一的随机数来标记SSL握手。 这样防止了攻击者嗅探整个登录过程，获取到加密的登录数据之后，不对数据进行解密, 而直接重传登录数据包的攻击手法。"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "优缺点"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "优点"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "使用 HTTPS 协议可认证用户和服务器，确保数据发送到正确的客户机和服务器 [2]  ；"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "HTTPS 协议是由 SSL+HTTP构建的可进行加密传输、身份认证的网络协议，要比 HTTP安全，可防止数据在传输过程中被窃取、改变，确保数据的完整性 [2]  。"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "HTTPS 是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻击的成本 [2]  。"
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "缺点"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "相同网络环境下，HTTPS 协议会使页面的加载时间延长近 50%，增加 10%到 20%的耗电。此外，HTTPS 协议还会影响缓存，增加数据开销和功耗 [2]  。"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "HTTPS 协议的安全是有范围的，在黑客攻击、拒绝服务攻击和服务器劫持等方面几乎起不到什么作用 [2]  。"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    "最关键的是，SSL 证书的 ",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                        href: "https://baike.baidu.com/item/%E4%BF%A1%E7%94%A8%E9%93%BE/12281667",
                                        children: "信用链"
                                    }),
                                    " 体系并不安全。特别是在某些国家可以控制  ",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                        href: "https://baike.baidu.com/item/CA/451921",
                                        children: "CA"
                                    }),
                                    "  根证书的情况下，中间人攻击一样可行 [2]  。"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    "成本增加。部署 HTTPS 后，因为 HTTPS 协议的工作要增加额外的计算资源消耗，例如 SSL 协议加密算法和 SSL 交互次数将占用一定的计算资源和服务器成本。在大规模用户访问应用的场景下，服务器需要频繁地做加密和解密操作，几乎每一个字节都需要做加解密，这就产生了服务器成本。随着 ",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                        href: "https://baike.baidu.com/item/%E4%BA%91%E8%AE%A1%E7%AE%97/9969353",
                                        children: "云计算"
                                    }),
                                    " 技术的发展， ",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                        href: "https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83/967340",
                                        children: "数据中心"
                                    }),
                                    " 部署的服务器使用成本在规模增加后逐步下降，相对于用户访问的安全提升，其投入成本已经下降到可接受程度 [4]  。’"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "拓展1： 浏览器如何校验证书的有效性"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "当浏览器与一个提供HTTPS服务的服务器进行交互时，服务器首先会提供一个数字证书。这个数字证书是由一个被公认的证书颁发机构（Certificate Authority, CA）颁发的，包含了服务器的公钥以及一些其他的信息，例如服务器的域名和证书的有效期等。浏览器会使用以下步骤来验证这个数字证书的有效性："
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "检查证书是否由一个受信任的CA颁发"
                                    }),
                                    "：浏览器会检查证书是否由一个受信任的CA颁发。浏览器会内置一份受信任的CA列表，如果证书的颁发者不在这个列表上，浏览器就会显示一个警告，告诉用户这个证书可能不安全。"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "检查证书的域名是否与服务器的域名匹配"
                                    }),
                                    "：浏览器会检查证书中的域名（Common Name或者Subject Alternative Name字段）是否与用户正在访问的域名一致。如果不一致，浏览器会显示一个警告，告诉用户这个证书可能是假的。"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "检查证书是否过期"
                                    }),
                                    "：浏览器会检查证书的有效期，如果证书已经过期，浏览器会显示一个警告。"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "验证证书的签名"
                                    }),
                                    "：证书是由CA使用它的私钥进行签名的。浏览器会使用CA的公钥（从内置的CA列表中获取）来验证这个签名。如果验证失败，那么这个证书就是伪造的。而对于自签名证书，要导入该证书来手动使浏览器信任它（::核心机制::）\n私钥加密 + 公钥解密（签名）\n私钥解密 + 公钥加密（加密，传输数据）"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "检查证书是否被撤销"
                                    }),
                                    "：有些情况下，即使一个证书在有效期内并且是由一个受信任的CA签名的，它也可能被认为是无效的。例如，如果私钥被泄露，CA就会撤销这个证书。浏览器可以通过在线证书状态协议（OCSP）或者证书撤销列表（CRL）来检查证书是否被撤销。"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "如果以上所有的检查都通过了，浏览器就会认为这个证书是有效的，并且会用这个证书中的公钥来与服务器进行安全的通信。"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "拓展2:  主流几种有效攻击https的方式"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "HTTPS协议能有效防止多种网络攻击，如数据窃听、数据篡改和重放攻击等。然而，尽管HTTPS非常安全，但它并不是绝对的安全，"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "中间人攻击（Man-in-the-Middle Attack）"
                            }),
                            "：在这种攻击中，攻击者插入到客户端和服务器之间，拦截并可能修改他们之间的通信。虽然HTTPS通过使用SSL/TLS协议提供了端到端加密，但如果攻击者可以欺骗用户或服务器，使他们接受攻击者的公钥作为对方的公钥，那么攻击者就能解密和修改通信的内容。例如，如果用户的浏览器被欺骗接受了一个伪造的证书，那么攻击者就可以进行此类攻击。这种攻击方法需要攻击者能够控制用户的网络连接，或者能够控制证书颁发机构（CA）。"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "SSL剥离攻击（SSL Stripping Attack）"
                            }),
                            "：在这种攻击中，攻击者拦截用户的HTTP请求，并阻止它升级到HTTPS连接。然后，攻击者与服务器建立HTTPS连接，但与用户保持HTTP连接。这样，用户发送的数据在传输到攻击者时是未加密的，攻击者可以查看和修改数据。然后攻击者再将数据加密，通过HTTPS连接发送给服务器。"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "SSL/TLS漏洞利用"
                            }),
                            "：尽管SSL/TLS协议在设计上是安全的，但其实现可能存在漏洞。过去已经发现了一些严重的SSL/TLS漏洞，如Heartbleed、POODLE和BEAST等。如果服务器或客户端的SSL/TLS实现存在这些漏洞，那么攻击者可以通过利用这些漏洞来攻击HTTPS连接。"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "钓鱼攻击（Phishing Attack）"
                            }),
                            "：在这种攻击中，攻击者设置一个伪造的网站，模仿真实的网站，并试图诱使用户访问这个伪造的网站。即使这个伪造的网站使用HTTPS，并且有一个看似合法的证书，但它仍然是不安全的，因为它是由攻击者控制的。如果用户不小心，他们可能会在这个伪造的网站上输入他们的用户名和密码，这样攻击者就可以窃取这些信息。"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "ps"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "密钥的应用之一就是信任机制的建立\ngit 和浏览器的原理是一样的，都是一方向另一方提供我是可信的证据，在此之前，需要先把自己的公钥向对方注册，申请链接的时候，被请求方用公钥验证你的私钥即可"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    "对称加密和非对称加密",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "\n对称加密 加密秘钥和解密密钥相同 速度快",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "\n非对称加密 不同。  公私钥就是非对称"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "3",
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "几个常见的加密算法\n对称： DES AES\n非对称： RSA\nhash： md5,sha"
                    }),
                    "\n"
                ]
            })
        ]
    });
}
function MDXContent(props = {}) {
    return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, props)
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9259:
/***/ ((module) => {

module.exports = import("web-vitals");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5953,956], () => (__webpack_exec__(5492)));
module.exports = __webpack_exports__;

})();