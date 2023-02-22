var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});

// node_modules/@remix-run/react/dist/esm/_virtual/_rollupPluginBabelHelpers.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends.apply(this, arguments);
}

// node_modules/@remix-run/react/dist/esm/components.js
import * as React from "react";
import { useHref, NavLink as NavLink$1, Link as Link$1, matchRoutes, useLocation, Await as Await$1, useNavigation, useAsyncError, useMatches as useMatches$1, useLoaderData as useLoaderData$1, useActionData as useActionData$1, useFetchers as useFetchers$1, useFetcher as useFetcher$1, UNSAFE_DataRouterContext, UNSAFE_DataRouterStateContext, useRouteError as useRouteError2, isRouteErrorResponse as isRouteErrorResponse2 } from "react-router-dom";

// node_modules/@remix-run/react/dist/esm/errorBoundaries.js
import React__default, { useContext } from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
var RemixErrorBoundary = class extends React__default.Component {
  constructor(props) {
    super(props), this.state = {
      error: props.error || null,
      location: props.location
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    return state.location !== props.location ? {
      error: props.error || null,
      location: props.location
    } : {
      error: props.error || state.error,
      location: state.location
    };
  }
  render() {
    return this.state.error ? /* @__PURE__ */ React__default.createElement(this.props.component, {
      error: this.state.error
    }) : this.props.children;
  }
};
function RemixRootDefaultErrorBoundary({
  error
}) {
  return console.error(error), /* @__PURE__ */ React__default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React__default.createElement("head", null, /* @__PURE__ */ React__default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React__default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /* @__PURE__ */ React__default.createElement("title", null, "Application Error!")), /* @__PURE__ */ React__default.createElement("body", null, /* @__PURE__ */ React__default.createElement("main", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, /* @__PURE__ */ React__default.createElement("h1", {
    style: {
      fontSize: "24px"
    }
  }, "Application Error"), /* @__PURE__ */ React__default.createElement("pre", {
    style: {
      padding: "2rem",
      background: "hsla(10, 50%, 50%, 0.1)",
      color: "red",
      overflow: "auto"
    }
  }, error.stack)), /* @__PURE__ */ React__default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `
    }
  })));
}
function V2_RemixRootDefaultErrorBoundary() {
  let error = useRouteError();
  if (isRouteErrorResponse(error))
    return /* @__PURE__ */ React__default.createElement(RemixRootDefaultCatchBoundaryImpl, {
      caught: error
    });
  if (error instanceof Error)
    return /* @__PURE__ */ React__default.createElement(RemixRootDefaultErrorBoundary, {
      error
    });
  {
    let errorString = error == null ? "Unknown Error" : typeof error == "object" && "toString" in error ? error.toString() : JSON.stringify(error);
    return /* @__PURE__ */ React__default.createElement(RemixRootDefaultErrorBoundary, {
      error: new Error(errorString)
    });
  }
}
var RemixCatchContext = /* @__PURE__ */ React__default.createContext(void 0);
function useCatch() {
  return useContext(RemixCatchContext);
}
function RemixCatchBoundary({
  catch: catchVal,
  component: Component,
  children
}) {
  return catchVal ? /* @__PURE__ */ React__default.createElement(RemixCatchContext.Provider, {
    value: catchVal
  }, /* @__PURE__ */ React__default.createElement(Component, null)) : /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, children);
}
function RemixRootDefaultCatchBoundary() {
  let caught = useCatch();
  return /* @__PURE__ */ React__default.createElement(RemixRootDefaultCatchBoundaryImpl, {
    caught
  });
}
function RemixRootDefaultCatchBoundaryImpl({
  caught
}) {
  return /* @__PURE__ */ React__default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React__default.createElement("head", null, /* @__PURE__ */ React__default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React__default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /* @__PURE__ */ React__default.createElement("title", null, "Unhandled Thrown Response!")), /* @__PURE__ */ React__default.createElement("body", null, /* @__PURE__ */ React__default.createElement("h1", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, caught.status, " ", caught.statusText), /* @__PURE__ */ React__default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `
    }
  })));
}

// node_modules/@remix-run/react/dist/esm/invariant.js
function invariant(value, message) {
  if (value === !1 || value === null || typeof value > "u")
    throw new Error(message);
}

// node_modules/@remix-run/react/dist/esm/links.js
import { parsePath } from "react-router-dom";

// node_modules/@remix-run/react/dist/esm/routeModules.js
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache)
    return routeModulesCache[route.id];
  try {
    let routeModule = await import(
      /* webpackIgnore: true */
      route.module
    );
    return routeModulesCache[route.id] = routeModule, routeModule;
  } catch {
    return window.location.reload(), new Promise(() => {
    });
  }
}

// node_modules/@remix-run/react/dist/esm/links.js
function getLinksForMatches(matches, routeModules, manifest) {
  let descriptors = matches.map((match) => {
    var _module$links;
    let module = routeModules[match.route.id];
    return ((_module$links = module.links) === null || _module$links === void 0 ? void 0 : _module$links.call(module)) || [];
  }).flat(1), preloads = getCurrentPageModulePreloadHrefs(matches, manifest);
  return dedupe(descriptors, preloads);
}
function isPageLinkDescriptor(object) {
  return object != null && typeof object.page == "string";
}
function isHtmlLinkDescriptor(object) {
  return object == null ? !1 : object.href == null ? object.rel === "preload" && (typeof object.imageSrcSet == "string" || typeof object.imagesrcset == "string") && (typeof object.imageSizes == "string" || typeof object.imagesizes == "string") : typeof object.rel == "string" && typeof object.href == "string";
}
async function getStylesheetPrefetchLinks(matches, manifest, routeModules) {
  return (await Promise.all(matches.map(async (match) => {
    let mod = await loadRouteModule(manifest.routes[match.route.id], routeModules);
    return mod.links ? mod.links() : [];
  }))).flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map((link) => link.rel === "preload" ? {
    ...link,
    rel: "prefetch"
  } : {
    ...link,
    rel: "prefetch",
    as: "style"
  });
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
  let path = parsePathPatch(page), isNew = (match, index) => currentMatches[index] ? match.route.id !== currentMatches[index].route.id : !0, matchPathChanged = (match, index) => {
    var _currentMatches$index;
    return currentMatches[index].pathname !== match.pathname || ((_currentMatches$index = currentMatches[index].route.path) === null || _currentMatches$index === void 0 ? void 0 : _currentMatches$index.endsWith("*")) && currentMatches[index].params["*"] !== match.params["*"];
  };
  return mode === "data" && location.search !== path.search ? nextMatches.filter((match, index) => {
    if (!manifest.routes[match.route.id].hasLoader)
      return !1;
    if (isNew(match, index) || matchPathChanged(match, index))
      return !0;
    if (match.route.shouldRevalidate) {
      var _currentMatches$;
      let routeChoice = match.route.shouldRevalidate({
        currentUrl: new URL(location.pathname + location.search + location.hash, window.origin),
        currentParams: ((_currentMatches$ = currentMatches[0]) === null || _currentMatches$ === void 0 ? void 0 : _currentMatches$.params) || {},
        nextUrl: new URL(page, window.origin),
        nextParams: match.params,
        defaultShouldRevalidate: !0
      });
      if (typeof routeChoice == "boolean")
        return routeChoice;
    }
    return !0;
  }) : nextMatches.filter((match, index) => {
    let manifestRoute = manifest.routes[match.route.id];
    return (mode === "assets" || manifestRoute.hasLoader) && (isNew(match, index) || matchPathChanged(match, index));
  });
}
function getDataLinkHrefs(page, matches, manifest) {
  let path = parsePathPatch(page);
  return dedupeHrefs(matches.filter((match) => manifest.routes[match.route.id].hasLoader).map((match) => {
    let {
      pathname,
      search
    } = path, searchParams = new URLSearchParams(search);
    return searchParams.set("_data", match.route.id), `${pathname}?${searchParams}`;
  }));
}
function getModuleLinkHrefs(matches, manifestPatch) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifestPatch.routes[match.route.id], hrefs = [route.module];
    return route.imports && (hrefs = hrefs.concat(route.imports)), hrefs;
  }).flat(1));
}
function getCurrentPageModulePreloadHrefs(matches, manifest) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifest.routes[match.route.id], hrefs = [route.module];
    return route.imports && (hrefs = hrefs.concat(route.imports)), hrefs;
  }).flat(1));
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function dedupe(descriptors, preloads) {
  let set = /* @__PURE__ */ new Set(), preloadsSet = new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    if (!isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href))
      return deduped;
    let str = JSON.stringify(descriptor);
    return set.has(str) || (set.add(str), deduped.push(descriptor)), deduped;
  }, []);
}
function parsePathPatch(href) {
  let path = parsePath(href);
  return path.search === void 0 && (path.search = ""), path;
}

// node_modules/@remix-run/react/dist/esm/markup.js
var ESCAPE_LOOKUP = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
}, ESCAPE_REGEX = /[&><\u2028\u2029]/g;
function escapeHtml(html) {
  return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
function createHtml(html) {
  return {
    __html: html
  };
}

// node_modules/@remix-run/react/dist/esm/components.js
function useDataRouterContext() {
  let context = React.useContext(UNSAFE_DataRouterContext);
  return invariant(context, "You must render this element inside a <DataRouterContext.Provider> element"), context;
}
function useDataRouterStateContext() {
  let context = React.useContext(UNSAFE_DataRouterStateContext);
  return invariant(context, "You must render this element inside a <DataRouterStateContext.Provider> element"), context;
}
var RemixContext = /* @__PURE__ */ React.createContext(void 0);
RemixContext.displayName = "Remix";
function useRemixContext() {
  let context = React.useContext(RemixContext);
  return invariant(context, "You must render this element inside a <Remix> element"), context;
}
function RemixRoute({
  id
}) {
  let {
    routeModules
  } = useRemixContext();
  invariant(routeModules, `Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`);
  let {
    default: Component
  } = routeModules[id];
  return invariant(Component, `Route "${id}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`), /* @__PURE__ */ React.createElement(Component, null);
}
function RemixRouteError({
  id
}) {
  let {
    future: future2,
    routeModules
  } = useRemixContext();
  invariant(routeModules, `Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`);
  let error = useRouteError2(), {
    CatchBoundary,
    ErrorBoundary
  } = routeModules[id];
  if (future2.v2_errorBoundary) {
    if (id === "root" && (ErrorBoundary || (ErrorBoundary = V2_RemixRootDefaultErrorBoundary)), ErrorBoundary)
      return /* @__PURE__ */ React.createElement(ErrorBoundary, null);
    throw error;
  }
  if (id === "root" && (CatchBoundary || (CatchBoundary = RemixRootDefaultCatchBoundary), ErrorBoundary || (ErrorBoundary = RemixRootDefaultErrorBoundary)), isRouteErrorResponse2(error)) {
    let tError = error;
    if ((tError == null ? void 0 : tError.error) instanceof Error && tError.status !== 404 && ErrorBoundary)
      return /* @__PURE__ */ React.createElement(ErrorBoundary, {
        error: tError.error
      });
    if (CatchBoundary)
      return /* @__PURE__ */ React.createElement(RemixCatchBoundary, {
        component: CatchBoundary,
        catch: error
      });
  }
  if (error instanceof Error && ErrorBoundary)
    return /* @__PURE__ */ React.createElement(ErrorBoundary, {
      error
    });
  throw error;
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let [maybePrefetch, setMaybePrefetch] = React.useState(!1), [shouldPrefetch, setShouldPrefetch] = React.useState(!1), {
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onTouchStart
  } = theirElementProps;
  React.useEffect(() => {
    prefetch === "render" && setShouldPrefetch(!0);
  }, [prefetch]);
  let setIntent = () => {
    prefetch === "intent" && setMaybePrefetch(!0);
  }, cancelIntent = () => {
    prefetch === "intent" && (setMaybePrefetch(!1), setShouldPrefetch(!1));
  };
  return React.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(!0);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]), [shouldPrefetch, {
    onFocus: composeEventHandlers(onFocus, setIntent),
    onBlur: composeEventHandlers(onBlur, cancelIntent),
    onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
    onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
    onTouchStart: composeEventHandlers(onTouchStart, setIntent)
  }];
}
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, NavLink = /* @__PURE__ */ React.forwardRef(({
  to,
  prefetch = "none",
  ...props
}, forwardedRef) => {
  let isAbsolute = typeof to == "string" && ABSOLUTE_URL_REGEX.test(to), href = useHref(to), [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NavLink$1, _extends({
    ref: forwardedRef,
    to
  }, props, prefetchHandlers)), shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
NavLink.displayName = "NavLink";
var Link = /* @__PURE__ */ React.forwardRef(({
  to,
  prefetch = "none",
  ...props
}, forwardedRef) => {
  let isAbsolute = typeof to == "string" && ABSOLUTE_URL_REGEX.test(to), href = useHref(to), [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Link$1, _extends({
    ref: forwardedRef,
    to
  }, props, prefetchHandlers)), shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
Link.displayName = "Link";
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event), event.defaultPrevented || ourHandler(event);
  };
}
function Links() {
  let {
    manifest,
    routeModules
  } = useRemixContext(), {
    matches
  } = useDataRouterStateContext(), links2 = React.useMemo(() => getLinksForMatches(matches, routeModules, manifest), [matches, routeModules, manifest]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, links2.map((link) => {
    if (isPageLinkDescriptor(link))
      return /* @__PURE__ */ React.createElement(PrefetchPageLinks, _extends({
        key: link.page
      }, link));
    let imageSrcSet = null;
    return "useId" in React ? (link.imagesrcset && (link.imageSrcSet = imageSrcSet = link.imagesrcset, delete link.imagesrcset), link.imagesizes && (link.imageSizes = link.imagesizes, delete link.imagesizes)) : (link.imageSrcSet && (link.imagesrcset = imageSrcSet = link.imageSrcSet, delete link.imageSrcSet), link.imageSizes && (link.imagesizes = link.imageSizes, delete link.imageSizes)), /* @__PURE__ */ React.createElement("link", _extends({
      key: link.rel + (link.href || "") + (imageSrcSet || "")
    }, link));
  }));
}
function PrefetchPageLinks({
  page,
  ...dataLinkProps
}) {
  let {
    router
  } = useDataRouterContext(), matches = React.useMemo(() => matchRoutes(router.routes, page), [router.routes, page]);
  return matches ? /* @__PURE__ */ React.createElement(PrefetchPageLinksImpl, _extends({
    page,
    matches
  }, dataLinkProps)) : (console.warn(`Tried to prefetch ${page} but no routes matched.`), null);
}
function usePrefetchedStylesheets(matches) {
  let {
    manifest,
    routeModules
  } = useRemixContext(), [styleLinks, setStyleLinks] = React.useState([]);
  return React.useEffect(() => {
    let interrupted = !1;
    return getStylesheetPrefetchLinks(matches, manifest, routeModules).then((links2) => {
      interrupted || setStyleLinks(links2);
    }), () => {
      interrupted = !0;
    };
  }, [matches, manifest, routeModules]), styleLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location = useLocation(), {
    manifest
  } = useRemixContext(), {
    matches
  } = useDataRouterStateContext(), newMatchesForData = React.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, manifest, location, "data"), [page, nextMatches, matches, manifest, location]), newMatchesForAssets = React.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, manifest, location, "assets"), [page, nextMatches, matches, manifest, location]), dataHrefs = React.useMemo(() => getDataLinkHrefs(page, newMatchesForData, manifest), [newMatchesForData, page, manifest]), moduleHrefs = React.useMemo(() => getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]), styleLinks = usePrefetchedStylesheets(newMatchesForAssets);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React.createElement("link", _extends({
    key: href,
    rel: "prefetch",
    as: "fetch",
    href
  }, linkProps))), moduleHrefs.map((href) => /* @__PURE__ */ React.createElement("link", _extends({
    key: href,
    rel: "modulepreload",
    href
  }, linkProps))), styleLinks.map((link) => /* @__PURE__ */ React.createElement("link", _extends({
    key: link.href
  }, link))));
}
function V1Meta() {
  let {
    routeModules
  } = useRemixContext(), {
    matches,
    loaderData
  } = useDataRouterStateContext(), location = useLocation(), meta8 = {}, parentsData = {};
  for (let match of matches) {
    let routeId = match.route.id, data = loaderData[routeId], params = match.params, routeModule = routeModules[routeId];
    if (routeModule.meta) {
      let routeMeta = typeof routeModule.meta == "function" ? routeModule.meta({
        data,
        parentsData,
        params,
        location,
        matches: void 0
      }) : routeModule.meta;
      if (routeMeta && Array.isArray(routeMeta))
        throw new Error(
          "The route at " + match.route.path + " returns an array. This is only supported with the `v2_meta` future flag in the Remix config. Either set the flag to `true` or update the route's meta function to return an object.\n\nTo reference the v1 meta function API, see https://remix.run/route/meta"
        );
      Object.assign(meta8, routeMeta);
    }
    parentsData[routeId] = data;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, Object.entries(meta8).map(([name, value]) => {
    if (!value)
      return null;
    if (["charset", "charSet"].includes(name))
      return /* @__PURE__ */ React.createElement("meta", {
        key: "charset",
        charSet: value
      });
    if (name === "title")
      return /* @__PURE__ */ React.createElement("title", {
        key: "title"
      }, String(value));
    let isOpenGraphTag = /^(og|music|video|article|book|profile|fb):.+$/.test(name);
    return [value].flat().map((content) => isOpenGraphTag ? /* @__PURE__ */ React.createElement("meta", {
      property: name,
      content,
      key: name + content
    }) : typeof content == "string" ? /* @__PURE__ */ React.createElement("meta", {
      name,
      content,
      key: name + content
    }) : /* @__PURE__ */ React.createElement("meta", _extends({
      key: name + JSON.stringify(content)
    }, content)));
  }));
}
function V2Meta() {
  let {
    routeModules
  } = useRemixContext(), {
    matches,
    loaderData
  } = useDataRouterStateContext(), location = useLocation(), meta8 = [], leafMeta = null, parentsData = {}, matchesWithMeta = matches.map((match) => ({
    ...match,
    meta: []
  })), index = -1;
  for (let match of matches) {
    index++;
    let routeId = match.route.id, data = loaderData[routeId], params = match.params, routeModule = routeModules[routeId], routeMeta = [];
    if (routeModule != null && routeModule.meta ? routeMeta = typeof routeModule.meta == "function" ? routeModule.meta({
      data,
      parentsData,
      params,
      location,
      matches: matchesWithMeta
    }) : routeModule.meta : leafMeta && (routeMeta = leafMeta), routeMeta = routeMeta || [], !Array.isArray(routeMeta))
      throw new Error("The `v2_meta` API is enabled in the Remix config, but the route at " + match.route.path + ` returns an invalid value. In v2, all route meta functions must return an array of meta objects.

To reference the v1 meta function API, see https://remix.run/route/meta`);
    matchesWithMeta[index].meta = routeMeta, meta8 = routeMeta, parentsData[routeId] = data, leafMeta = meta8;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, meta8.flat().map((metaProps) => metaProps ? "title" in metaProps ? /* @__PURE__ */ React.createElement("title", {
    key: "title"
  }, String(metaProps.title)) : "charSet" in metaProps || "charset" in metaProps ? /* @__PURE__ */ React.createElement("meta", {
    key: "charset",
    charSet: metaProps.charSet || metaProps.charset
  }) : /* @__PURE__ */ React.createElement("meta", _extends({
    key: JSON.stringify(metaProps)
  }, metaProps)) : null));
}
function Meta() {
  let {
    future: future2
  } = useRemixContext();
  return future2 != null && future2.v2_meta ? /* @__PURE__ */ React.createElement(V2Meta, null) : /* @__PURE__ */ React.createElement(V1Meta, null);
}
function Await(props) {
  return /* @__PURE__ */ React.createElement(Await$1, props);
}
var isHydrated = !1;
function Scripts(props) {
  let {
    manifest,
    serverHandoffString,
    abortDelay
  } = useRemixContext(), {
    router,
    static: isStatic,
    staticContext
  } = useDataRouterContext(), {
    matches
  } = useDataRouterStateContext(), navigation = useNavigation();
  React.useEffect(() => {
    isHydrated = !0;
  }, []);
  let deferredScripts = [], initialScripts = React.useMemo(() => {
    var _manifest$hmr;
    let contextScript = staticContext ? `window.__remixContext = ${serverHandoffString};` : " ", activeDeferreds = staticContext == null ? void 0 : staticContext.activeDeferreds;
    contextScript += activeDeferreds ? ["__remixContext.p = function(v,e,p,x) {", "  if (typeof e !== 'undefined') {", "    x=new Error(e.message);", "x.stack=e.stack;", "    p=Promise.reject(x);", "  } else {", "    p=Promise.resolve(v);", "  }", "  return p;", "};", "__remixContext.n = function(i,k) {", "  __remixContext.t = __remixContext.t || {};", "  __remixContext.t[i] = __remixContext.t[i] || {};", "  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});", typeof abortDelay == "number" ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${abortDelay});` : "", "  return p;", "};", "__remixContext.r = function(i,k,v,e,p,x) {", "  p = __remixContext.t[i][k];", "  if (typeof e !== 'undefined') {", "    x=new Error(e.message);", "x.stack=e.stack;", "    p.e(x);", "  } else {", "    p.r(v);", "  }", "};"].join(`
`) + Object.entries(activeDeferreds).map(([routeId, deferredData]) => {
      let pendingKeys = new Set(deferredData.pendingKeys), promiseKeyValues = deferredData.deferredKeys.map((key) => {
        if (pendingKeys.has(key))
          return deferredScripts.push(/* @__PURE__ */ React.createElement(DeferredHydrationScript, {
            key: `${routeId} | ${key}`,
            deferredData,
            routeId,
            dataKey: key
          })), `${JSON.stringify(key)}:__remixContext.n(${JSON.stringify(routeId)}, ${JSON.stringify(key)})`;
        {
          let trackedPromise = deferredData.data[key];
          if (typeof trackedPromise._error < "u") {
            let toSerialize = {
              message: trackedPromise._error.message,
              stack: void 0
            };
            return toSerialize.stack = trackedPromise._error.stack, `${JSON.stringify(key)}:__remixContext.p(!1, ${escapeHtml(JSON.stringify(toSerialize))})`;
          } else {
            if (typeof trackedPromise._data > "u")
              throw new Error(`The deferred data for ${key} was not resolved, did you forget to return data from a deferred promise?`);
            return `${JSON.stringify(key)}:__remixContext.p(${escapeHtml(JSON.stringify(trackedPromise._data))})`;
          }
        }
      }).join(`,
`);
      return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(routeId)}], {${promiseKeyValues}});`;
    }).join(`
`) + (deferredScripts.length > 0 ? `__remixContext.a=${deferredScripts.length};` : "") : "";
    let routeModulesScript = isStatic ? `${(_manifest$hmr = manifest.hmr) !== null && _manifest$hmr !== void 0 && _manifest$hmr.runtime ? `import ${JSON.stringify(manifest.hmr.runtime)};` : ""}import ${JSON.stringify(manifest.url)};
${matches.map((match, index) => `import * as route${index} from ${JSON.stringify(manifest.routes[match.route.id].module)};`).join(`
`)}
window.__remixRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};

import(${JSON.stringify(manifest.entry.module)});` : " ";
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("script", _extends({}, props, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: createHtml(contextScript),
      type: void 0
    })), /* @__PURE__ */ React.createElement("script", _extends({}, props, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: createHtml(routeModulesScript),
      type: "module",
      async: !0
    })));
  }, []);
  if (!isStatic && typeof __remixContext == "object" && __remixContext.a)
    for (let i = 0; i < __remixContext.a; i++)
      deferredScripts.push(/* @__PURE__ */ React.createElement(DeferredHydrationScript, {
        key: i
      }));
  let nextMatches = React.useMemo(() => {
    if (navigation.location) {
      let matches2 = matchRoutes(router.routes, navigation.location);
      return invariant(matches2, `No routes match path "${navigation.location.pathname}"`), matches2;
    }
    return [];
  }, [navigation.location, router.routes]), routePreloads = matches.concat(nextMatches).map((match) => {
    let route = manifest.routes[match.route.id];
    return (route.imports || []).concat([route.module]);
  }).flat(1), preloads = isHydrated ? [] : manifest.entry.imports.concat(routePreloads);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("link", {
    rel: "modulepreload",
    href: manifest.url,
    crossOrigin: props.crossOrigin
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "modulepreload",
    href: manifest.entry.module,
    crossOrigin: props.crossOrigin
  }), dedupe2(preloads).map((path) => /* @__PURE__ */ React.createElement("link", {
    key: path,
    rel: "modulepreload",
    href: path,
    crossOrigin: props.crossOrigin
  })), !isHydrated && initialScripts, !isHydrated && deferredScripts);
}
function DeferredHydrationScript({
  dataKey,
  deferredData,
  routeId
}) {
  return typeof document > "u" && deferredData && dataKey && routeId && invariant(deferredData.pendingKeys.includes(dataKey), `Deferred data for route ${routeId} with key ${dataKey} was not pending but tried to render a script for it.`), /* @__PURE__ */ React.createElement(React.Suspense, {
    fallback: typeof document > "u" && deferredData && dataKey && routeId ? null : /* @__PURE__ */ React.createElement("script", {
      async: !0,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: {
        __html: " "
      }
    })
  }, typeof document > "u" && deferredData && dataKey && routeId ? /* @__PURE__ */ React.createElement(Await, {
    resolve: deferredData.data[dataKey],
    errorElement: /* @__PURE__ */ React.createElement(ErrorDeferredHydrationScript, {
      dataKey,
      routeId
    }),
    children: (data) => /* @__PURE__ */ React.createElement("script", {
      async: !0,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: {
        __html: `__remixContext.r(${JSON.stringify(routeId)}, ${JSON.stringify(dataKey)}, ${escapeHtml(JSON.stringify(data))});`
      }
    })
  }) : /* @__PURE__ */ React.createElement("script", {
    async: !0,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: " "
    }
  }));
}
function ErrorDeferredHydrationScript({
  dataKey,
  routeId
}) {
  let error = useAsyncError(), toSerialize = {
    message: error.message,
    stack: void 0
  };
  return toSerialize.stack = error.stack, /* @__PURE__ */ React.createElement("script", {
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: `__remixContext.r(${JSON.stringify(routeId)}, ${JSON.stringify(dataKey)}, !1, ${escapeHtml(JSON.stringify(toSerialize))});`
    }
  });
}
function dedupe2(array) {
  return [...new Set(array)];
}
function useMatches() {
  let {
    routeModules
  } = useRemixContext();
  return useMatches$1().map((match) => ({
    id: match.id,
    pathname: match.pathname,
    params: match.params,
    data: match.data,
    handle: routeModules[match.id].handle
  }));
}
function useLoaderData() {
  return useLoaderData$1();
}
function useActionData() {
  return useActionData$1();
}
var LiveReload = function({
  port = Number(8002),
  timeoutMs = 1e3,
  nonce = void 0
}) {
  let js = String.raw;
  return /* @__PURE__ */ React.createElement("script", {
    nonce,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: js`
                function remixLiveReloadConnect(config) {
                  let protocol = location.protocol === "https:" ? "wss:" : "ws:";
                  let host = location.hostname;
                  let port = (window.__remixContext && window.__remixContext.dev && window.__remixContext.dev.liveReloadPort) || ${String(port)};
                  let socketPath = protocol + "//" + host + ":" + port + "/socket";
                  let ws = new WebSocket(socketPath);
                  ws.onmessage = async (message) => {
                    let event = JSON.parse(message.data);
                    if (event.type === "LOG") {
                      console.log(event.message);
                    }
                    if (event.type === "RELOAD") {
                      console.log("💿 Reloading window ...");
                      window.location.reload();
                    }
                    if (event.type === "HMR") {
                      if (!window.__hmr__ || !window.__hmr__.contexts) {
                        console.log("💿 [HMR] No HMR context, reloading window ...");
                        window.location.reload();
                        return;
                      }
                      if (!event.updates || !event.updates.length) return;
                      let updateAccepted = false;
                      for (let update of event.updates) {
                        console.log("[HMR] " + update.reason + " [" + update.id +"]")
                        if (update.revalidate) {
                          console.log("[HMR] Revalidating [" + update.id + "]");
                        }
                        let imported = await import(update.url +  '?t=' + event.assetsManifest.hmr.timestamp);
                        if (window.__hmr__.contexts[update.id]) {
                          let accepted = window.__hmr__.contexts[update.id].emit(
                            imported
                          );
                          if (accepted) {
                            console.log("[HMR] Updated accepted by", update.id);
                            updateAccepted = true;
                          }
                        }
                      }
                      if (event.assetsManifest && window.__hmr__.contexts["remix:manifest"]) {
                        let accepted = window.__hmr__.contexts["remix:manifest"].emit(
                          event.assetsManifest
                        );
                        if (accepted) {
                          console.log("[HMR] Updated accepted by", "remix:manifest");
                          updateAccepted = true;
                        }
                      }
                      if (!updateAccepted) {
                        console.log("[HMR] Updated rejected, reloading...");
                        window.location.reload();
                      }
                    }
                  };
                  ws.onopen = () => {
                    if (config && typeof config.onOpen === "function") {
                      config.onOpen();
                    }
                  };
                  ws.onclose = (event) => {
                    if (event.code === 1006) {
                      console.log("Remix dev asset server web socket closed. Reconnecting...");
                      setTimeout(
                        () =>
                          remixLiveReloadConnect({
                            onOpen: () => window.location.reload(),
                          }),
                      ${String(timeoutMs)}
                      );
                    }
                  };
                  ws.onerror = (error) => {
                    console.log("Remix dev asset server web socket error:");
                    console.error(error);
                  };
                }
                remixLiveReloadConnect();
              `
    }
  });
};

// node_modules/@remix-run/react/dist/esm/routes.js
import * as React2 from "react";
import { redirect } from "react-router-dom";
function groupRoutesByParentId(manifest) {
  let routes2 = {};
  return Object.values(manifest).forEach((route) => {
    let parentId = route.parentId || "";
    routes2[parentId] || (routes2[parentId] = []), routes2[parentId].push(route);
  }), routes2;
}
function createServerRoutes(manifest, routeModules, future2, parentId = "", routesByParentId = groupRoutesByParentId(manifest)) {
  return (routesByParentId[parentId] || []).map((route) => {
    let hasErrorBoundary = future2.v2_errorBoundary === !0 ? route.id === "root" || route.hasErrorBoundary : route.id === "root" || route.hasCatchBoundary || route.hasErrorBoundary, dataRoute = {
      caseSensitive: route.caseSensitive,
      element: /* @__PURE__ */ React2.createElement(RemixRoute, {
        id: route.id
      }),
      errorElement: hasErrorBoundary ? /* @__PURE__ */ React2.createElement(RemixRouteError, {
        id: route.id
      }) : void 0,
      id: route.id,
      index: route.index,
      path: route.path,
      handle: routeModules[route.id].handle
    }, children = createServerRoutes(manifest, routeModules, future2, route.id, routesByParentId);
    return children.length > 0 && (dataRoute.children = children), dataRoute;
  });
}

// node_modules/@remix-run/react/dist/esm/index.js
import { Form, Outlet, isRouteErrorResponse as isRouteErrorResponse3, unstable_useBlocker, unstable_usePrompt, useAsyncError as useAsyncError2, useAsyncValue, useBeforeUnload, useFormAction, useHref as useHref2, useLocation as useLocation3, useNavigate, useNavigation as useNavigation2, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRevalidator, useRouteError as useRouteError3, useRouteLoaderData, useSearchParams, useSubmit } from "react-router-dom";

// node_modules/@remix-run/react/dist/esm/scroll-restoration.js
import * as React3 from "react";
import { useLocation as useLocation2, UNSAFE_useScrollRestoration } from "react-router-dom";
var STORAGE_KEY = "positions";
function ScrollRestoration({
  getKey,
  ...props
}) {
  let location = useLocation2(), matches = useMatches();
  UNSAFE_useScrollRestoration({
    getKey,
    storageKey: STORAGE_KEY
  });
  let key = React3.useMemo(
    () => {
      if (!getKey)
        return null;
      let userKey = getKey(location, matches);
      return userKey !== location.key ? userKey : null;
    },
    []
  ), restoreScroll = ((STORAGE_KEY2, restoreKey) => {
    if (!window.history.state || !window.history.state.key) {
      let key2 = Math.random().toString(32).slice(2);
      window.history.replaceState({
        key: key2
      }, "");
    }
    try {
      let storedY = JSON.parse(sessionStorage.getItem(STORAGE_KEY2) || "{}")[restoreKey || window.history.state.key];
      typeof storedY == "number" && window.scrollTo(0, storedY);
    } catch (error) {
      console.error(error), sessionStorage.removeItem(STORAGE_KEY2);
    }
  }).toString();
  return /* @__PURE__ */ React3.createElement("script", _extends({}, props, {
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: `(${restoreScroll})(${JSON.stringify(STORAGE_KEY)}, ${JSON.stringify(key)})`
    }
  }));
}

// node_modules/@remix-run/react/dist/esm/server.js
import * as React4 from "react";
import { createStaticRouter, StaticRouterProvider } from "react-router-dom/server";
function RemixServer({
  context,
  url,
  abortDelay
}) {
  typeof url == "string" && (url = new URL(url));
  let {
    manifest,
    routeModules,
    serverHandoffString
  } = context, routes2 = createServerRoutes(manifest.routes, routeModules, context.future), router = createStaticRouter(routes2, context.staticHandlerContext);
  return /* @__PURE__ */ React4.createElement(RemixContext.Provider, {
    value: {
      manifest,
      routeModules,
      serverHandoffString,
      future: context.future,
      abortDelay
    }
  }, /* @__PURE__ */ React4.createElement(RemixErrorBoundary, {
    location: router.state.location,
    component: RemixRootDefaultErrorBoundary
  }, /* @__PURE__ */ React4.createElement(StaticRouterProvider, {
    router,
    context: context.staticHandlerContext,
    hydrate: !1
  })));
}

// app/entry.server.tsx
import { renderToString } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = renderToString(
    /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader2,
  meta: () => meta
});
import {
  json as json2
} from "@remix-run/cloudflare";

// app/components/Header.tsx
import { Popover, Transition } from "@headlessui/react";
import clsx2 from "clsx";
import { Fragment as Fragment2, useEffect as useEffect2, useRef } from "react";

// app/components/Container.tsx
import { forwardRef as forwardRef2 } from "react";
import clsx from "clsx";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var OuterContainer = forwardRef2(function({
  className,
  children,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV2("div", { ref, className: clsx("sm:px-8", className), ...props, children: /* @__PURE__ */ jsxDEV2("div", { className: "mx-auto max-w-7xl lg:px-8", children }, void 0, !1, {
    fileName: "app/components/Container.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Container.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}), InnerContainer = forwardRef2(function({
  className,
  children,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV2(
    "div",
    {
      ref,
      className: clsx("relative px-4 sm:px-8 lg:px-12", className),
      ...props,
      children: /* @__PURE__ */ jsxDEV2("div", { className: "mx-auto max-w-2xl lg:max-w-5xl", children }, void 0, !1, {
        fileName: "app/components/Container.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Container.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}), Container = forwardRef2(function({
  children,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxDEV2(OuterContainer, { ref, ...props, children: /* @__PURE__ */ jsxDEV2(InnerContainer, { children }, void 0, !1, {
    fileName: "app/components/Container.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Container.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
});
Container.Outer = OuterContainer;
Container.Inner = InnerContainer;

// app/components/Header.tsx
import { Fragment as Fragment3, jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function CloseIcon(props) {
  return /* @__PURE__ */ jsxDEV3("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", ...props, children: /* @__PURE__ */ jsxDEV3(
    "path",
    {
      d: "m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 11,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
function ChevronDownIcon(props) {
  return /* @__PURE__ */ jsxDEV3("svg", { viewBox: "0 0 8 6", "aria-hidden": "true", ...props, children: /* @__PURE__ */ jsxDEV3(
    "path",
    {
      d: "M1.75 1.75 4 4.25l2.25-2.5",
      fill: "none",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 26,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
function SunIcon(props) {
  return /* @__PURE__ */ jsxDEV3(
    "svg",
    {
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV3("path", { d: "M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV3(
          "path",
          {
            d: "M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061",
            fill: "none"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Header.tsx",
            lineNumber: 48,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 39,
      columnNumber: 5
    },
    this
  );
}
function MoonIcon(props) {
  return /* @__PURE__ */ jsxDEV3("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", ...props, children: /* @__PURE__ */ jsxDEV3(
    "path",
    {
      d: "M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 59,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}
function MobileNavItem({
  href,
  children
}) {
  return /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(Popover.Button, { as: Link, to: href, className: "block py-2", children }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 78,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
function MobileNavigation(props) {
  return /* @__PURE__ */ jsxDEV3(Popover, { ...props, children: [
    /* @__PURE__ */ jsxDEV3(Popover.Button, { className: "group flex items-center bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 relative text-zinc-900/10 dark:text-white/10", children: [
      /* @__PURE__ */ jsxDEV3("span", { className: "text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-400", children: "Menu" }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(ChevronDownIcon, { className: "ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(
        IowaLeft,
        {
          className: "h-[42px] absolute -top-[1px] -left-[10px] fill-white/90 dark:fill-zinc-800/90",
          "aria-hidden": "true"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 93,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(
        IowaRight,
        {
          className: "h-[45px] absolute -right-[20px] -top-[1px] fill-white/90 dark:fill-zinc-800/90",
          "aria-hidden": "true"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 97,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(Transition.Root, { children: [
      /* @__PURE__ */ jsxDEV3(
        Transition.Child,
        {
          as: Fragment2,
          enter: "duration-150 ease-out",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "duration-150 ease-in",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsxDEV3(Popover.Overlay, { className: "fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 112,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 103,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(
        Transition.Child,
        {
          as: Fragment2,
          enter: "duration-150 ease-out",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "duration-150 ease-in",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
          children: /* @__PURE__ */ jsxDEV3(
            Popover.Panel,
            {
              focus: !0,
              className: "fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800",
              children: [
                /* @__PURE__ */ jsxDEV3("div", { className: "flex flex-row-reverse items-center justify-between", children: [
                  /* @__PURE__ */ jsxDEV3(Popover.Button, { "aria-label": "Close menu", className: "-m-1 p-1", children: /* @__PURE__ */ jsxDEV3(CloseIcon, { className: "h-6 w-6 text-zinc-500 dark:text-zinc-400" }, void 0, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 129,
                    columnNumber: 17
                  }, this) }, void 0, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 128,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ jsxDEV3("h2", { className: "text-sm font-medium text-zinc-600 dark:text-zinc-400", children: "Navigation" }, void 0, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 131,
                    columnNumber: 15
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 127,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV3("nav", { className: "mt-6", children: /* @__PURE__ */ jsxDEV3("ul", { className: "-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300", children: [
                  /* @__PURE__ */ jsxDEV3(MobileNavItem, { href: "/about", children: "About" }, void 0, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 137,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV3(MobileNavItem, { href: "/posts", children: "Posts" }, void 0, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 138,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV3(MobileNavItem, { href: "/projects", children: "Projects" }, void 0, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 139,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV3(MobileNavItem, { href: "/speaking", children: "Speaking" }, void 0, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 140,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV3(MobileNavItem, { href: "/uses", children: "Uses" }, void 0, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 141,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 136,
                  columnNumber: 15
                }, this) }, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 135,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 123,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 114,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}
function NavItem({
  href,
  children
}) {
  return /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(
    NavLink,
    {
      to: href,
      prefetch: "intent",
      className: ({ isActive }) => clsx2(
        "relative block px-3 py-2 transition",
        isActive ? "text-teal-500 dark:text-teal-400" : "hover:text-teal-500 dark:hover:text-teal-400"
      ),
      children: ({ isActive }) => /* @__PURE__ */ jsxDEV3(Fragment3, { children: [
        children,
        isActive && /* @__PURE__ */ jsxDEV3("span", { className: "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 176,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 173,
        columnNumber: 11
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 160,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 159,
    columnNumber: 5
  }, this);
}
function DesktopNavigation({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV3(
    "nav",
    {
      className: clsx2(
        className,
        "text-zinc-900/10 border-y border-zinc-900/10 dark:border-white/10 dark:text-white/10 relative backdrop-blur"
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV3("ul", { className: "flex bg-white/90 px-3 text-sm font-medium shadow-zinc-800/5 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200", children: [
          /* @__PURE__ */ jsxDEV3(NavItem, { href: "/about", children: "About" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 198,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3(NavItem, { href: "/posts", children: "Posts" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 199,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3(NavItem, { href: "/projects", children: "Projects" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 200,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3(NavItem, { href: "/speaking", children: "Speaking" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 201,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3(NavItem, { href: "/uses", children: "Uses" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 202,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 197,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV3(
          IowaLeft,
          {
            className: "h-[42px] absolute -top-[1px] -left-[10px] fill-white/90 dark:fill-zinc-800/90",
            "aria-hidden": "true"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Header.tsx",
            lineNumber: 204,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV3(
          IowaRight,
          {
            className: "h-[45px] absolute -right-[20px] -top-[1px] fill-white/90 dark:fill-zinc-800/90",
            "aria-hidden": "true"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Header.tsx",
            lineNumber: 208,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 190,
      columnNumber: 5
    },
    this
  );
}
function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add("[&_*]:!transition-none"), window.setTimeout(() => {
      document.documentElement.classList.remove("[&_*]:!transition-none");
    }, 0);
  }
  function toggleMode() {
    disableTransitionsTemporarily();
    let isSystemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches, isDarkMode = document.documentElement.classList.toggle("dark");
    isDarkMode === isSystemDarkMode ? delete window.localStorage.isDarkMode : window.localStorage.isDarkMode = isDarkMode;
  }
  return /* @__PURE__ */ jsxDEV3(
    "button",
    {
      type: "button",
      "aria-label": "Toggle dark mode",
      className: "group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20",
      onClick: toggleMode,
      children: [
        /* @__PURE__ */ jsxDEV3(SunIcon, { className: "h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 245,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV3(MoonIcon, { className: "hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 246,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 239,
      columnNumber: 5
    },
    this
  );
}
function clamp(number, a, b) {
  let min = Math.min(a, b), max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}
function AvatarContainer({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV3(
    "div",
    {
      className: clsx2(
        className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 259,
      columnNumber: 5
    },
    this
  );
}
function Avatar({
  large = !1,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV3(
    Link,
    {
      to: "/",
      prefetch: "intent",
      "aria-label": "Home",
      className: clsx2(className, "pointer-events-auto"),
      ...props,
      children: /* @__PURE__ */ jsxDEV3(
        "img",
        {
          src: "https://2.gravatar.com/avatar/91e322e8b9cee3b329a2bf5ad7169164",
          alt: "",
          sizes: large ? "4rem" : "2.25rem",
          className: clsx2(
            "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
            large ? "h-16 w-16" : "h-9 w-9"
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 285,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 278,
      columnNumber: 5
    },
    this
  );
}
function Header() {
  let isHomePage = useLocation3().pathname === "/", headerRef = useRef(), avatarRef = useRef(), isInitial = useRef(!0);
  return useEffect2(() => {
    var _a;
    let downDelay = ((_a = avatarRef.current) == null ? void 0 : _a.offsetTop) ?? 0, upDelay = 64;
    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value + "");
    }
    function removeProperty(property) {
      document.documentElement.style.removeProperty(property);
    }
    function updateHeaderStyles() {
      var _a2;
      let { top, height } = ((_a2 = headerRef.current) == null ? void 0 : _a2.getBoundingClientRect()) ?? {
        top: 0,
        height: 0
      }, scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      );
      if (isInitial.current && setProperty("--header-position", "sticky"), setProperty("--content-offset", `${downDelay}px`), isInitial.current || scrollY < downDelay)
        setProperty("--header-height", `${downDelay + height}px`), setProperty("--header-mb", `${-downDelay}px`);
      else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay);
        setProperty("--header-height", `${offset}px`), setProperty("--header-mb", `${height - offset}px`);
      } else
        top === 0 && (setProperty("--header-height", `${scrollY + height}px`), setProperty("--header-mb", `${-scrollY}px`));
      top === 0 && scrollY > 0 && scrollY >= downDelay ? (setProperty("--header-inner-position", "fixed"), removeProperty("--header-top"), removeProperty("--avatar-top")) : (removeProperty("--header-inner-position"), setProperty("--header-top", "0px"), setProperty("--avatar-top", "0px"));
    }
    function updateAvatarStyles() {
      if (!isHomePage)
        return;
      let fromScale = 1, toScale = 36 / 64, fromX = 0, toX = 2 / 16, scrollY = downDelay - window.scrollY, scale = scrollY * (fromScale - toScale) / downDelay + toScale;
      scale = clamp(scale, fromScale, toScale);
      let x = scrollY * (fromX - toX) / downDelay + toX;
      x = clamp(x, fromX, toX), setProperty(
        "--avatar-image-transform",
        `translate3d(${x}rem, 0, 0) scale(${scale})`
      );
      let borderScale = 1 / (toScale / scale), borderTransform = `translate3d(${(-toX + x) * borderScale}rem, 0, 0) scale(${borderScale})`;
      setProperty("--avatar-border-transform", borderTransform), setProperty("--avatar-border-opacity", scale === toScale ? 1 : 0);
    }
    function updateStyles() {
      updateHeaderStyles(), updateAvatarStyles(), isInitial.current = !1;
    }
    return updateStyles(), window.addEventListener("scroll", updateStyles, { passive: !0 }), window.addEventListener("resize", updateStyles), () => {
      window.removeEventListener("scroll", updateStyles, { passive: !0 }), window.removeEventListener("resize", updateStyles);
    };
  }, [isHomePage]), /* @__PURE__ */ jsxDEV3(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV3(
      "header",
      {
        className: "pointer-events-none relative z-50 flex flex-col",
        style: {
          height: "var(--header-height)",
          marginBottom: "var(--header-mb)"
        },
        children: [
          isHomePage && /* @__PURE__ */ jsxDEV3(Fragment3, { children: [
            /* @__PURE__ */ jsxDEV3(
              "div",
              {
                ref: avatarRef,
                className: "order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Header.tsx",
                lineNumber: 415,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV3(
              Container,
              {
                className: "top-0 order-last -mb-3 pt-3",
                style: { position: "var(--header-position)" },
                children: /* @__PURE__ */ jsxDEV3(
                  "div",
                  {
                    className: "top-[var(--avatar-top,theme(spacing.3))] w-full",
                    style: { position: "var(--header-inner-position)" },
                    children: /* @__PURE__ */ jsxDEV3("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxDEV3(
                        AvatarContainer,
                        {
                          className: "absolute left-0 top-3 origin-left transition-opacity",
                          style: {
                            opacity: "var(--avatar-border-opacity, 0)",
                            transform: "var(--avatar-border-transform)"
                          }
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/Header.tsx",
                          lineNumber: 428,
                          columnNumber: 19
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV3(
                        Avatar,
                        {
                          large: !0,
                          className: "block h-16 w-16 origin-left",
                          style: { transform: "var(--avatar-image-transform)" }
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/Header.tsx",
                          lineNumber: 435,
                          columnNumber: 19
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 427,
                      columnNumber: 17
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 423,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/Header.tsx",
                lineNumber: 419,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 414,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV3(
            "div",
            {
              ref: headerRef,
              className: "top-0 z-10 h-16 pt-6",
              style: { position: "var(--header-position)" },
              children: /* @__PURE__ */ jsxDEV3(
                Container,
                {
                  className: "top-[var(--header-top,theme(spacing.6))] w-full",
                  style: { position: "var(--header-inner-position)" },
                  children: /* @__PURE__ */ jsxDEV3("div", { className: "relative flex gap-4", children: [
                    /* @__PURE__ */ jsxDEV3("div", { className: "flex flex-1", children: !isHomePage && /* @__PURE__ */ jsxDEV3(AvatarContainer, { children: /* @__PURE__ */ jsxDEV3(Avatar, {}, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 458,
                      columnNumber: 21
                    }, this) }, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 457,
                      columnNumber: 19
                    }, this) }, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 455,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ jsxDEV3("div", { className: "flex flex-1 justify-end md:justify-center", children: [
                      /* @__PURE__ */ jsxDEV3(MobileNavigation, { className: "pointer-events-auto md:hidden mr-4" }, void 0, !1, {
                        fileName: "app/components/Header.tsx",
                        lineNumber: 463,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ jsxDEV3(DesktopNavigation, { className: "pointer-events-auto hidden md:block" }, void 0, !1, {
                        fileName: "app/components/Header.tsx",
                        lineNumber: 464,
                        columnNumber: 17
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 462,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ jsxDEV3("div", { className: "flex justify-end md:flex-1", children: /* @__PURE__ */ jsxDEV3("div", { className: "pointer-events-auto", children: /* @__PURE__ */ jsxDEV3(ModeToggle, {}, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 468,
                      columnNumber: 19
                    }, this) }, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 467,
                      columnNumber: 17
                    }, this) }, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 466,
                      columnNumber: 15
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 454,
                    columnNumber: 13
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 450,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 445,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Header.tsx",
        lineNumber: 406,
        columnNumber: 7
      },
      this
    ),
    isHomePage && /* @__PURE__ */ jsxDEV3("div", { style: { height: "var(--content-offset)" } }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 475,
      columnNumber: 22
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 405,
    columnNumber: 5
  }, this);
}
function IowaLeft(props) {
  return /* @__PURE__ */ jsxDEV3(
    "svg",
    {
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 76 307",
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV3("path", { d: "M67.312 300.632c1.998 2.157 5.497 4.552 7.586 5.192V.846H.714l.03 1.33c.017.733.136 2.264.264 3.403.213 1.884.348 2.193 1.499 3.437.951 1.028 1.429 1.908 1.926 3.55.773 2.554.811 4.161.157 6.662-.975 3.734-.462 5.44 3.313 11.002 3.382 4.982 3.528 5.273 4.024 8.019.581 3.217.42 3.946-2.09 9.434-2 4.377-2.122 4.854-2.76 10.842-.215 2.001-.658 3.912-1.373 5.916a642.2 642.2 0 0 0-2.992 8.727C.829 78.777.775 79.022.759 82.042c-.025 4.432.37 5.285 6.014 13.014 2.551 3.495 6.472 11.338 8.026 16.056 1.029 3.123 1.149 3.799 1.152 6.508.007 4.28.537 6.172 3.252 11.601 2.25 4.502 2.388 4.892 2.815 7.987.959 6.954 1.561 8.298 6.266 13.985 1.918 2.319 4.353 5.265 5.41 6.547 3.692 4.475 4.886 7.114 5.887 13.008.34 2.006 1.038 5.396 1.55 7.534.954 3.985 1.054 5.337.854 11.578-.092 2.865-.043 3.13 1.569 8.495 2.5 8.321 3.236 9.74 7.56 14.548 2.759 3.068 4.297 5.943 4.98 9.308.253 1.241.912 3.29 1.466 4.552 2.086 4.754 2.393 6.859 2.129 14.565-.095 2.754-.016 3.254 1.141 7.247 1.076 3.713 1.3 5.003 1.675 9.613.362 4.454.598 5.86 1.448 8.6 1.477 4.767 1.528 5.674.654 11.662-2.035 13.933-2.036 14.157-.16 17.943.718 1.45 1.895 3.191 2.865 4.239Z" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 488,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV3(
          "path",
          {
            d: "M74.898 305.824c-2.089-.64-5.588-3.035-7.586-5.192-.97-1.048-2.147-2.789-2.865-4.239-1.877-3.787-1.875-4.01.16-17.943.874-5.988.823-6.895-.654-11.662-.85-2.74-1.086-4.146-1.448-8.6-.374-4.61-.599-5.9-1.675-9.613-1.157-3.993-1.236-4.493-1.141-7.247.264-7.706-.043-9.811-2.129-14.565-.554-1.262-1.213-3.311-1.465-4.552-.684-3.365-2.222-6.24-4.981-9.308-4.324-4.808-5.06-6.227-7.56-14.548-1.612-5.365-1.66-5.63-1.569-8.495.2-6.241.1-7.593-.854-11.578a139.967 139.967 0 0 1-1.55-7.534c-1-5.894-2.195-8.533-5.887-13.008a7921.793 7921.793 0 0 0-5.41-6.547c-4.705-5.687-5.307-7.031-6.266-13.985-.427-3.095-.565-3.485-2.816-7.987-2.714-5.429-3.244-7.321-3.25-11.601-.004-2.709-.124-3.385-1.153-6.508-1.554-4.718-5.475-12.561-8.026-16.055C1.128 87.326.734 86.474.759 82.041c.016-3.02.07-3.265 1.953-8.874a642.2 642.2 0 0 1 2.992-8.727c.715-2.004 1.158-3.915 1.372-5.916.64-5.988.76-6.465 2.762-10.842 2.509-5.488 2.67-6.217 2.09-9.434-.497-2.746-.643-3.037-4.025-8.02-3.775-5.562-4.288-7.267-3.313-11.001.654-2.501.616-4.108-.157-6.663-.497-1.641-.975-2.521-1.926-3.55C1.356 7.773 1.22 7.464 1.008 5.58.88 4.439.761 2.909.744 2.177L.714.846h74.184",
            strokeWidth: "10",
            className: "stroke-current",
            fill: "none"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Header.tsx",
            lineNumber: 489,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 482,
      columnNumber: 5
    },
    this
  );
}
function IowaRight(props) {
  return /* @__PURE__ */ jsxDEV3(
    "svg",
    {
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 146 327",
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV3("path", { d: "M27.564 318.6c1.207 1.499 3.276 3.728 4.595 4.955h-.012c2.227 2.068 2.493 2.229 3.691 2.229 1.636 0 3.224-.659 4.452-1.848.819-.792.962-1.138.962-2.333 0-.771-.213-2.309-.473-3.417-.612-2.607-.43-5.424.46-7.17 1.454-2.845 5.158-5.887 8.677-7.124.856-.301 2.805-.764 4.33-1.028 3.303-.574 4.63-1.201 6.72-3.177 2.233-2.113 3.227-3.826 3.906-6.736.322-1.383.853-3.671 1.178-5.084.85-3.683 2.606-6.978 6.146-11.53 5.083-6.537 6.194-9.173 6.148-14.593-.055-6.484-1.355-10.107-5.307-14.79-4.958-5.874-6.012-8.188-5.443-11.946.375-2.474 2.039-8.722 2.805-10.534.674-1.596 4.343-5.136 6.35-6.128 1.45-.716 2.502-.897 9.759-1.677 4.474-.481 9.199-.961 10.5-1.066 2.935-.236 6.628-1.078 9.051-2.062 1.012-.412 5.114-2.575 9.114-4.808 6.927-3.865 7.401-4.186 9.936-6.73 1.464-1.47 3.013-3.337 3.442-4.151.429-.813 1.208-3.139 1.73-5.168.523-2.029 1.331-4.444 1.796-5.365 1.042-2.065 3.746-5.446 6.241-7.806 3.446-3.258 5.354-6.172 6.103-9.318.587-2.465 1.033-9.514.825-13.012-.445-7.445-.809-8.708-3.457-11.982-1.753-2.168-3.029-3.168-7.163-5.613-6.526-3.858-8.301-5.762-11.587-12.431-2.653-5.382-4.009-7.027-9.776-11.849-2.269-1.898-4.842-4.267-5.718-5.266-1.89-2.156-4.546-6.119-5.411-8.075-2.061-4.66-5.924-9.553-9.321-11.808-.898-.596-3.409-1.664-5.928-2.521-2.404-.818-6.375-2.463-8.826-3.655-3.855-1.876-4.735-2.44-6.537-4.196-3.587-3.493-3.865-4.085-7.027-14.95-1.547-5.317-3.345-11.307-3.994-13.31-1.909-5.891-2.115-8.401-1.015-12.35.51-1.825 2.42-5.761 3.71-7.642.478-.695 1.278-2.14 1.78-3.212.761-1.627.93-2.39 1.015-4.6l.102-2.65-3.518-4.934c-1.934-2.713-4.018-5.865-4.63-7.004-.612-1.14-1.3-2.291-1.53-2.56-.229-.27-.618-1.265-.865-2.211s-.64-2.09-.874-2.542L54.25 1H1v305.419c4.78-.285 9.106-.449 9.613-.365.508.084 2.376.716 4.152 1.404l3.229 1.251 3.686 3.583c2.028 1.971 4.676 4.809 5.884 6.308Z" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 507,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV3(
          "path",
          {
            d: "M1 306.419c4.78-.285 9.106-.449 9.613-.365.508.084 2.376.716 4.152 1.404l3.229 1.251 3.686 3.583c2.028 1.971 4.676 4.809 5.884 6.308 1.207 1.499 3.276 3.728 4.595 4.955h-.012c2.227 2.068 2.493 2.229 3.691 2.229 1.636 0 3.224-.659 4.452-1.848.819-.792.962-1.138.962-2.333 0-.771-.213-2.309-.473-3.417-.612-2.607-.43-5.424.46-7.17 1.454-2.845 5.158-5.887 8.677-7.124.856-.301 2.805-.764 4.33-1.028 3.303-.574 4.63-1.201 6.72-3.177 2.233-2.113 3.227-3.826 3.906-6.736.322-1.383.853-3.671 1.178-5.084.85-3.683 2.606-6.978 6.146-11.53 5.083-6.537 6.194-9.173 6.148-14.593-.055-6.484-1.355-10.107-5.307-14.79-4.958-5.874-6.012-8.188-5.443-11.946.375-2.474 2.039-8.722 2.805-10.534.674-1.596 4.343-5.136 6.35-6.128 1.45-.716 2.502-.897 9.759-1.677 4.474-.481 9.199-.961 10.5-1.066 2.935-.236 6.628-1.078 9.051-2.062 1.012-.412 5.114-2.575 9.114-4.808 6.927-3.865 7.401-4.186 9.936-6.73 1.464-1.47 3.013-3.337 3.442-4.151.429-.813 1.208-3.139 1.73-5.168.523-2.029 1.331-4.444 1.796-5.365 1.042-2.065 3.746-5.446 6.241-7.806 3.446-3.258 5.354-6.172 6.103-9.318.587-2.465 1.033-9.514.825-13.012-.445-7.445-.809-8.708-3.457-11.982-1.753-2.168-3.029-3.168-7.163-5.613-6.526-3.858-8.301-5.762-11.587-12.431-2.653-5.382-4.009-7.027-9.776-11.849-2.269-1.898-4.842-4.267-5.718-5.266-1.89-2.156-4.546-6.119-5.411-8.075-2.061-4.66-5.924-9.553-9.321-11.808-.898-.596-3.409-1.664-5.928-2.521-2.404-.818-6.375-2.463-8.826-3.655-3.855-1.876-4.735-2.44-6.537-4.196-3.587-3.493-3.865-4.085-7.027-14.95-1.547-5.317-3.345-11.307-3.994-13.31-1.909-5.891-2.115-8.401-1.015-12.35.51-1.825 2.42-5.761 3.71-7.642.478-.695 1.278-2.14 1.78-3.212.761-1.627.93-2.39 1.015-4.6l.102-2.65-3.518-4.934c-1.934-2.713-4.018-5.865-4.63-7.004-.612-1.14-1.3-2.291-1.53-2.56-.229-.27-.618-1.265-.865-2.211s-.64-2.09-.874-2.542L54.25 1H1",
            strokeWidth: "10",
            className: "stroke-current",
            fill: "none"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Header.tsx",
            lineNumber: 508,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 501,
      columnNumber: 5
    },
    this
  );
}

// app/routes/auth.tsx
var auth_exports = {};
__export(auth_exports, {
  INTENTS: () => INTENTS,
  LogOutButton: () => LogOutButton,
  action: () => action,
  loader: () => loader
});
import {
  json,
  redirect as redirect2
} from "@remix-run/cloudflare";
import bcrypt from "bcryptjs";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
async function loader({ context: { auth } }) {
  return await auth.check() ? redirect2("/") : null;
}
var INTENTS = {
  login: "login",
  register: "register",
  logout: "logout"
}, badRequest = (error) => json({ error }, { status: 400 });
async function action({ request, context: { auth, DB } }) {
  var _a, _b, _c;
  let form = new URLSearchParams(await request.text()), email = (_a = form.get("email")) == null ? void 0 : _a.toLowerCase(), password = form.get("password"), intent = form.get("intent");
  if (intent === INTENTS.logout)
    return redirect2("/", {
      headers: {
        "set-cookie": await auth.logout()
      }
    });
  if (!email)
    return badRequest("Missing email");
  if (!password)
    return badRequest("Missing password");
  switch (intent) {
    case INTENTS.register:
      if (email !== "jplhomer@gmail.com")
        return badRequest("You are not me. Sorry, not sorry.");
      if ((_b = (await DB.prepare(
        "SELECT id FROM users WHERE email = ?"
      ).bind(email).all()).results) != null && _b.length)
        return badRequest(
          "A user is registered with that email address. Did you mean to log in?"
        );
      try {
        await DB.prepare("INSERT INTO users (email, password) VALUES (?, ?)").bind(email, await bcrypt.hash(password, 10)).run();
        let { id } = await DB.prepare("SELECT id FROM users WHERE email = ?").bind(email).first(), user = {
          id,
          email
        };
        return redirect2("/", {
          headers: {
            "set-cookie": await auth.login(user)
          }
        });
      } catch (e) {
        return console.log({
          message: e.message,
          cause: (_c = e.cause) == null ? void 0 : _c.message
        }), json(
          {
            error: "Something went wrong. Please try again later."
          },
          { status: 500 }
        );
      }
    case INTENTS.login:
      let cookie = await auth.attempt(email, password);
      return cookie ? redirect2("/", {
        headers: {
          "set-cookie": cookie
        }
      }) : badRequest("Invalid email or password");
  }
  throw new Error(`Invalid intent: ${intent}`);
}
function LogOutButton({
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV4(Form, { method: "post", action: "/auth", children: [
    /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "intent", value: INTENTS.logout }, void 0, !1, {
      fileName: "app/routes/auth.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("button", { ...props, children }, void 0, !1, {
      fileName: "app/routes/auth.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.tsx",
    lineNumber: 128,
    columnNumber: 5
  }, this);
}

// app/components/Footer.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function NavLink2({ href, children }) {
  return /* @__PURE__ */ jsxDEV5(
    Link,
    {
      to: href,
      prefetch: "intent",
      className: "transition hover:text-teal-500 dark:hover:text-teal-400",
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/Footer.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}
function Footer({ isLoggedIn }) {
  return /* @__PURE__ */ jsxDEV5("footer", { className: "mt-32", children: /* @__PURE__ */ jsxDEV5(Container.Outer, { children: /* @__PURE__ */ jsxDEV5("div", { className: "border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40", children: /* @__PURE__ */ jsxDEV5(Container.Inner, { children: /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-col items-center justify-between gap-6 sm:flex-row", children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200", children: [
      /* @__PURE__ */ jsxDEV5(NavLink2, { href: "/about", children: "About" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 25,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5(NavLink2, { href: "/projects", children: "Projects" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5(NavLink2, { href: "/speaking", children: "Speaking" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 27,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5(NavLink2, { href: "/uses", children: "Uses" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      isLoggedIn && /* @__PURE__ */ jsxDEV5(LogOutButton, { className: "transition hover:text-teal-500 dark:hover:text-teal-400", children: "Log out" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 30,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 24,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { className: "text-sm text-zinc-400 dark:text-zinc-500", children: [
      "\xA9 ",
      new Date().getFullYear(),
      " Josh Larson. All rights reserved."
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 35,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 23,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 22,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/components/WebShell.tsx
import clsx3 from "clsx";
import { useCallback, useEffect as useEffect3, useMemo as useMemo3, useState as useState2 } from "react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function WebShell({ children }) {
  let [height, setHeight] = useState2(0), [focusedIndex, setFocusedIndex] = useState2(!1), [mostRecentFocusedIndex, setMostRecentFocusedIndex] = useState2(0), [panelIds, setPanelIds] = useState2([createPanelId()]), toggleVisibility = useCallback(() => {
    setFocusedIndex(height === 0 ? mostRecentFocusedIndex : !1), setHeight((height2) => height2 === 0 ? "50%" : 0);
  }, [height, mostRecentFocusedIndex]);
  return useWebShellKeyboardShortcuts({ toggleVisibility }), /* @__PURE__ */ jsxDEV6("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ jsxDEV6(
      "div",
      {
        className: "h-full overflow-y-hidden flex-1",
        onClick: () => setFocusedIndex(!1),
        children: /* @__PURE__ */ jsxDEV6("div", { className: "h-full overflow-auto", children }, void 0, !1, {
          fileName: "app/components/WebShell.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/WebShell.tsx",
        lineNumber: 21,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV6(
      "div",
      {
        className: "overflow-hidden bg-black transition-all duration-500 ease-in-out flex flex-col flex-nowrap",
        style: { height },
        children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "border border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV6("span", { children: "Shell" }, void 0, !1, {
              fileName: "app/components/WebShell.tsx",
              lineNumber: 32,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxDEV6(
                "button",
                {
                  onClick: () => {
                    panelIds.length >= 5 || (setPanelIds((panelIds2) => [...panelIds2, createPanelId()]), setFocusedIndex(panelIds.length));
                  },
                  children: "Split"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/WebShell.tsx",
                  lineNumber: 34,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV6("button", { onClick: toggleVisibility, children: "Close" }, void 0, !1, {
                fileName: "app/components/WebShell.tsx",
                lineNumber: 43,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/WebShell.tsx",
              lineNumber: 33,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/WebShell.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV6(
            "div",
            {
              className: "grid min-h-full",
              style: {
                gridTemplateColumns: panelIds.length > 1 ? `repeat(${panelIds.length}, minmax(0px, 100%)` : "",
                gridTemplateRows: "repeat(1, 100%)"
              },
              children: panelIds.map((id, index) => /* @__PURE__ */ jsxDEV6(
                ShellPanel,
                {
                  id,
                  isFocused: focusedIndex === index,
                  panelCount: panelIds.length,
                  onFocus: () => {
                    setFocusedIndex(index), setMostRecentFocusedIndex(index);
                  },
                  onClose: () => {
                    setPanelIds(
                      (panelIds2) => panelIds2.filter((panelId) => panelId !== id)
                    ), setFocusedIndex(Math.max(0, focusedIndex - 1));
                  }
                },
                id,
                !1,
                {
                  fileName: "app/components/WebShell.tsx",
                  lineNumber: 57,
                  columnNumber: 13
                },
                this
              ))
            },
            void 0,
            !1,
            {
              fileName: "app/components/WebShell.tsx",
              lineNumber: 46,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/WebShell.tsx",
        lineNumber: 27,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/WebShell.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
function createPanelId() {
  return crypto.randomUUID();
}
function useWebShellKeyboardShortcuts({
  toggleVisibility
}) {
  let onKeyDown = useCallback(
    (e) => {
      switch (e.key) {
        case "`":
          toggleVisibility();
          break;
      }
    },
    [toggleVisibility]
  );
  useEffect3(() => (document.addEventListener("keydown", onKeyDown), () => document.removeEventListener("keydown", onKeyDown)), [onKeyDown]);
}
function ShellPanel({
  isFocused,
  onFocus,
  onClose,
  panelCount = 1,
  id
}) {
  return /* @__PURE__ */ jsxDEV6("div", { className: "flex flex-col", role: "tabpanel", onClick: onFocus, children: [
    panelCount > 1 && /* @__PURE__ */ jsxDEV6(
      "div",
      {
        className: clsx3(
          "flex items-center justify-between p-2 text-sm",
          isFocused ? "bg-gray-200 dark:bg-gray-800" : "bg-gray-300 dark:bg-gray-700"
        ),
        children: [
          /* @__PURE__ */ jsxDEV6("span", { children: "jplhomer" }, void 0, !1, {
            fileName: "app/components/WebShell.tsx",
            lineNumber: 131,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV6("button", { onClick: onClose, children: "Close" }, void 0, !1, {
            fileName: "app/components/WebShell.tsx",
            lineNumber: 132,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/WebShell.tsx",
        lineNumber: 123,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV6(Shell, { isFocused }, void 0, !1, {
      fileName: "app/components/WebShell.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    ";"
  ] }, void 0, !0, {
    fileName: "app/components/WebShell.tsx",
    lineNumber: 121,
    columnNumber: 5
  }, this);
}
var registeredCommands = registerCommands([
  {
    name: "clear",
    description: "Clears the terminal",
    showInAutomplete: !1,
    handle({ clear }) {
      clear();
    }
  },
  {
    name: "echo",
    description: "Prints the given text",
    showInAutomplete: !1,
    handle({ args, print }) {
      print(args.join(" "));
    }
  },
  {
    name: "time",
    description: "Prints the current time",
    handle({ print }) {
      print("It's bad-bitch-o-clock");
    }
  },
  {
    name: "treats",
    description: "Gives you a treat",
    handle({ print, flags }) {
      if (flags.type) {
        print(`Here is a ${flags.type} treat`);
        return;
      }
      flags.all ? print("Here is ALL the treats") : print("OK here is a treat");
    },
    flags: [
      {
        name: "all",
        description: "You get all the things",
        type: "boolean"
      },
      {
        name: "type",
        description: "The type of treat",
        type: "string"
      }
    ],
    commands: [
      {
        name: "cookie",
        description: "You want a cookie?",
        handle({ print }) {
          print("Fine here is a cookie");
        }
      },
      {
        name: "pizza",
        description: "Wow",
        handle({ print }) {
          print("Whatever");
        }
      }
    ]
  }
]);
function registerCommands(commands) {
  function addFullName(command, parentName) {
    var _a;
    let fullName = parentName ? parentName + " " + command.name : command.name;
    return {
      ...command,
      fullName,
      commands: (_a = command.commands) == null ? void 0 : _a.map(
        (subcommand) => addFullName(subcommand, fullName)
      )
    };
  }
  return commands.map((command) => addFullName(command));
}
function Shell({ isFocused }) {
  let [input, setInput] = useState2(""), [cursorPosition, setCursorPosition] = useState2(0), [commandHistory, setCommandHistory] = useState2([]), [commandHistoryIndex, setCommandHistoryIndex] = useState2(0), [autocompleteIndex, setAutocompleteIndex] = useState2(
    !1
  ), [outputs, setOutputs] = useState2([]), autocompleteCommands = useMemo3(() => {
    var _a;
    return input.trim() === "" ? [] : (((_a = findMatchingCommand(input, registeredCommands)) == null ? void 0 : _a.commands) ?? registeredCommands ?? []).filter((command) => command.fullName.startsWith(input.trim())).sort((a, b) => a.name.localeCompare(b.name));
  }, [input]), runCommand = useCallback(
    (command, input2) => {
      let { flags } = parseCommandInput(command, input2), handlerArgs = {
        args: input2.split(" ").slice(1),
        flags,
        print: (text) => setOutputs((outputs2) => [...outputs2, { text, type: "output" }]),
        clear: () => setOutputs([])
      };
      setOutputs((outputs2) => [...outputs2, { text: input2, type: "prompt" }]), setCommandHistory((commands) => [...commands, input2]), setInput(""), setCursorPosition(0), setCommandHistoryIndex((i) => i + 1), command.handle(handlerArgs);
    },
    []
  ), attemptToRunCommand = useCallback(
    (input2) => {
      let selectedAutocompleteCommand = autocompleteIndex !== !1 && autocompleteCommands[autocompleteIndex];
      if (selectedAutocompleteCommand) {
        runCommand(selectedAutocompleteCommand, input2);
        return;
      }
      let matchingCommand = findMatchingCommand(input2, registeredCommands);
      if (matchingCommand) {
        runCommand(matchingCommand, input2);
        return;
      }
      let [commandInput] = input2.split(" ");
      switch (commandInput.trim()) {
        case "":
          setOutputs((outputs2) => [
            ...outputs2,
            { text: input2, type: "prompt" }
          ]);
          break;
        default:
          setOutputs((outputs2) => [
            ...outputs2,
            { text: input2, type: "prompt" }
          ]), setCommandHistory((commands) => [...commands, input2]), setInput(""), setCursorPosition(0), setCommandHistoryIndex((i) => i + 1), setOutputs((outputs2) => [
            ...outputs2,
            { text: `Command not found: ${commandInput}`, type: "output" }
          ]);
      }
    },
    [autocompleteCommands, autocompleteIndex, runCommand]
  ), onKeyDown = useCallback(
    (e) => {
      switch (e.key) {
        case "Enter":
          attemptToRunCommand(input);
          break;
        case "Backspace":
          let deleteAll = e.metaKey, deleteWord = e.altKey, newPrompt = input;
          deleteAll ? newPrompt = "" : deleteWord ? newPrompt = input.replace(/\s*[\w\d:/._-]+\s*$/, "") : newPrompt = input.slice(0, -1), setInput(newPrompt), setCursorPosition(newPrompt.length), setAutocompleteIndex(!1);
          break;
        case "ArrowLeft":
          setCursorPosition(
            (cursorPosition2) => Math.max(0, cursorPosition2 - 1)
          );
          break;
        case "ArrowRight":
          setCursorPosition(
            (cursorPosition2) => Math.min(cursorPosition2 + 1, input.length)
          );
        case "ArrowUp":
          if (commandHistoryIndex === 0)
            return;
          commandHistoryIndex === commandHistory.length && setCommandHistory((commands) => [...commands, input]), setCommandHistoryIndex((commandsIndex) => commandsIndex - 1), setInput(commandHistory[commandHistoryIndex - 1]), setCursorPosition(commandHistory[commandHistoryIndex - 1].length);
          break;
        case "ArrowDown":
          if (commandHistoryIndex + 1 >= commandHistory.length)
            return;
          setCommandHistoryIndex((i) => i + 1), setInput(() => commandHistory[commandHistoryIndex + 1]), setCursorPosition(commandHistory[commandHistoryIndex + 1].length);
          break;
        case "Tab":
          if (e.preventDefault(), autocompleteCommands.length === 0)
            return;
          let direction = e.shiftKey ? -1 : 1;
          setAutocompleteIndex(
            (i) => i === !1 ? 0 : Math.abs((i + direction) % autocompleteCommands.length)
          );
          break;
        case "Meta":
        case "Control":
        case "Shift":
        case "Alt":
        case "CapsLock":
        case "Escape":
          return;
        default:
          if (e.metaKey) {
            switch (e.key) {
              case "v":
                navigator.clipboard.readText().then((text) => {
                  setInput((prompt) => prompt + text), setCursorPosition(
                    (cursorPosition2) => cursorPosition2 + text.length
                  );
                });
                break;
            }
            return;
          }
          if (e.ctrlKey)
            switch (e.key) {
              case "`":
                return;
            }
          setInput((prompt) => prompt + e.key), setCursorPosition((cursorPosition2) => cursorPosition2 + 1);
      }
    },
    [
      attemptToRunCommand,
      autocompleteCommands.length,
      commandHistory,
      commandHistoryIndex,
      input
    ]
  );
  return useEffect3(() => {
    if (!!isFocused)
      return document.addEventListener("keydown", onKeyDown), () => document.removeEventListener("keydown", onKeyDown);
  }, [isFocused, onKeyDown]), /* @__PURE__ */ jsxDEV6(
    "div",
    {
      role: "textbox",
      className: clsx3(
        "h-full overflow-scroll p-4 bg-slate-700 text-white font-mono min-h-full text-sm",
        !isFocused && "opacity-60"
      ),
      children: [
        /* @__PURE__ */ jsxDEV6("p", { children: "I am a shell" }, void 0, !1, {
          fileName: "app/components/WebShell.tsx",
          lineNumber: 504,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { children: [
          outputs.map((output, index) => /* @__PURE__ */ jsxDEV6(
            "p",
            {
              className: clsx3(output.type === "output" && "text-zinc-300 mb-4"),
              children: [
                output.type === "prompt" && /* @__PURE__ */ jsxDEV6(PromptPrefix, {}, void 0, !1, {
                  fileName: "app/components/WebShell.tsx",
                  lineNumber: 511,
                  columnNumber: 42
                }, this),
                /* @__PURE__ */ jsxDEV6("span", { children: output.text }, void 0, !1, {
                  fileName: "app/components/WebShell.tsx",
                  lineNumber: 512,
                  columnNumber: 13
                }, this)
              ]
            },
            index,
            !0,
            {
              fileName: "app/components/WebShell.tsx",
              lineNumber: 507,
              columnNumber: 11
            },
            this
          )),
          /* @__PURE__ */ jsxDEV6("div", { children: [
            /* @__PURE__ */ jsxDEV6(PromptPrefix, {}, void 0, !1, {
              fileName: "app/components/WebShell.tsx",
              lineNumber: 516,
              columnNumber: 11
            }, this),
            input.split("").map((letter, index) => /* @__PURE__ */ jsxDEV6(
              Letter,
              {
                letter,
                hasActiveCursor: index === cursorPosition,
                isFocused
              },
              index,
              !1,
              {
                fileName: "app/components/WebShell.tsx",
                lineNumber: 518,
                columnNumber: 13
              },
              this
            )),
            cursorPosition === input.length && /* @__PURE__ */ jsxDEV6(Cursor, { isFocused }, void 0, !1, {
              fileName: "app/components/WebShell.tsx",
              lineNumber: 525,
              columnNumber: 47
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/WebShell.tsx",
            lineNumber: 515,
            columnNumber: 9
          }, this),
          autocompleteCommands.length > 0 && /* @__PURE__ */ jsxDEV6("div", { className: "text-zinc-400", children: autocompleteCommands.map((command, index) => /* @__PURE__ */ jsxDEV6("p", { children: /* @__PURE__ */ jsxDEV6(
            "button",
            {
              className: clsx3(autocompleteIndex === index && "text-white"),
              onClick: () => {
                runCommand(command, command.fullName);
              },
              children: command.name
            },
            void 0,
            !1,
            {
              fileName: "app/components/WebShell.tsx",
              lineNumber: 531,
              columnNumber: 17
            },
            this
          ) }, command.name, !1, {
            fileName: "app/components/WebShell.tsx",
            lineNumber: 530,
            columnNumber: 15
          }, this)) }, void 0, !1, {
            fileName: "app/components/WebShell.tsx",
            lineNumber: 528,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/WebShell.tsx",
          lineNumber: 505,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/WebShell.tsx",
      lineNumber: 496,
      columnNumber: 5
    },
    this
  );
}
function findMatchingCommand(input, commands, previousCommand) {
  var _a;
  let [firstWord, ...restWords] = input.trim().split(" "), command = commands.find((command2) => command2.name === firstWord);
  return command ? restWords.length === 0 || !((_a = command.commands) != null && _a.length) ? command : findMatchingCommand(restWords.join(" "), command.commands, command) : previousCommand;
}
function parseCommandInput(command, input) {
  var _a;
  let args = input.trim().split(/[ =]/), flags = {};
  for (let i = 0; i < args.length; i++) {
    let arg = args[i];
    if (arg.startsWith("-")) {
      let argWithoutDash = arg.replace(/-/g, ""), flag = (_a = command.flags) == null ? void 0 : _a.find((flag2) => flag2.char === argWithoutDash || flag2.name === argWithoutDash);
      if (flag)
        if (flag.type === "boolean")
          flags[flag.name] = !0;
        else {
          let nextArg = args[i + 1];
          (!nextArg || nextArg.startsWith("-")) && (nextArg = ""), flags[flag.name] = nextArg, nextArg || i++;
        }
    }
  }
  return { flags };
}
function Cursor({
  children,
  isFocused
}) {
  let [isVisible, setIsVisible] = useState2(!isFocused);
  useEffect3(() => {
    if (!isFocused)
      return;
    let timer = setInterval(() => {
      setIsVisible((isVisible2) => !isVisible2);
    }, 500);
    return () => clearInterval(timer);
  }, [isFocused, setIsVisible]);
  let className = clsx3(
    "border border-white",
    isVisible && isFocused && "bg-white"
  );
  return /* @__PURE__ */ jsxDEV6("span", { className, children: children ?? "\xA0" }, void 0, !1, {
    fileName: "app/components/WebShell.tsx",
    lineNumber: 651,
    columnNumber: 10
  }, this);
}
function Letter({
  letter,
  hasActiveCursor,
  isFocused
}) {
  return hasActiveCursor ? /* @__PURE__ */ jsxDEV6(Cursor, { isFocused, children: letter }, void 0, !1, {
    fileName: "app/components/WebShell.tsx",
    lineNumber: 664,
    columnNumber: 5
  }, this) : letter;
}
function PromptPrefix() {
  return /* @__PURE__ */ jsxDEV6("span", { className: "font-bold", children: "$ " }, void 0, !1, {
    fileName: "app/components/WebShell.tsx",
    lineNumber: 671,
    columnNumber: 10
  }, this);
}

// app/components/Layout.tsx
import { Fragment as Fragment4, jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function Layout({
  children,
  isLoggedIn
}) {
  return /* @__PURE__ */ jsxDEV7(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV7("div", { className: "fixed inset-0 flex justify-center sm:px-8", children: /* @__PURE__ */ jsxDEV7("div", { className: "flex w-full max-w-7xl lg:px-8", children: /* @__PURE__ */ jsxDEV7("div", { className: "w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "relative h-full", children: /* @__PURE__ */ jsxDEV7(WebShell, { children: [
      /* @__PURE__ */ jsxDEV7(Header, {}, void 0, !1, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("main", { children }, void 0, !1, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7(Footer, { isLoggedIn }, void 0, !1, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-Y3P7CYO3.css";

// app/styles/syntax.css
var syntax_default = "/build/_assets/syntax-KHUSTDGD.css";

// app/root.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: syntax_default }
], modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`;
async function loader2({ context: { auth } }) {
  return json2({
    isLoggedIn: await auth.check()
  });
}
function App() {
  let { isLoggedIn } = useLoaderData();
  return /* @__PURE__ */ jsxDEV8("html", { className: "h-full antialiased", lang: "en", children: [
    /* @__PURE__ */ jsxDEV8("head", { children: [
      /* @__PURE__ */ jsxDEV8(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("script", { dangerouslySetInnerHTML: { __html: modeScript } }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("body", { className: "flex h-full flex-col bg-zinc-50 dark:bg-black dark:text-zinc-100", children: [
      /* @__PURE__ */ jsxDEV8(Layout, { isLoggedIn, children: /* @__PURE__ */ jsxDEV8(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}

// app/routes/posts.$slug.edit.tsx
var posts_slug_edit_exports = {};
__export(posts_slug_edit_exports, {
  action: () => action2,
  default: () => EditPost,
  loader: () => loader3,
  meta: () => meta2
});
import { json as json3, redirect as redirect3 } from "@remix-run/cloudflare";

// app/components/PostForm.tsx
import TextareaMarkdown from "textarea-markdown-editor";

// app/components/Form.tsx
import clsx4 from "clsx";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Label({
  className,
  htmlFor,
  children
}) {
  return /* @__PURE__ */ jsxDEV9(
    "label",
    {
      htmlFor,
      className: clsx4("block font-bold mb-2 mt-4", className),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}
function Button({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV9(
    "button",
    {
      className: clsx4(
        "mt-4 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded",
        className
      ),
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
function ValidationError({ children }) {
  return /* @__PURE__ */ jsxDEV9("div", { className: "text-red-500 font-bold mt-4", children }, void 0, !1, {
    fileName: "app/components/Form.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
function Input({
  as: Component = "input",
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV9(
    Component,
    {
      className: clsx4("dark:bg-zinc-800", className),
      ...props,
      type: props.type ?? "text"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form.tsx",
      lineNumber: 51,
      columnNumber: 5
    },
    this
  );
}

// app/components/PostForm.tsx
import { Fragment as Fragment5, jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function PostForm({ post }) {
  let actionData = useActionData(), isEdit = !!post;
  return /* @__PURE__ */ jsxDEV10(Form, { method: "post", children: [
    /* @__PURE__ */ jsxDEV10(Label, { htmlFor: "title", children: "Title" }, void 0, !1, {
      fileName: "app/components/PostForm.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(
      Input,
      {
        type: "text",
        name: "title",
        id: "title",
        className: "w-full font-mono",
        defaultValue: post == null ? void 0 : post.title,
        required: !0
      },
      void 0,
      !1,
      {
        fileName: "app/components/PostForm.tsx",
        lineNumber: 22,
        columnNumber: 7
      },
      this
    ),
    isEdit && /* @__PURE__ */ jsxDEV10(Fragment5, { children: [
      /* @__PURE__ */ jsxDEV10(Label, { htmlFor: "slug", children: "Slug" }, void 0, !1, {
        fileName: "app/components/PostForm.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10(
        Input,
        {
          type: "text",
          name: "slug",
          id: "slug",
          className: "w-full font-mono",
          defaultValue: post == null ? void 0 : post.slug,
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/PostForm.tsx",
          lineNumber: 34,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/PostForm.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV10(Label, { htmlFor: "content", children: "Content (optional)" }, void 0, !1, {
      fileName: "app/components/PostForm.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(
      TextareaMarkdown,
      {
        name: "content",
        id: "content",
        className: "font-mono w-full dark:bg-zinc-800",
        cols: 80,
        rows: 20,
        defaultValue: post == null ? void 0 : post.content
      },
      void 0,
      !1,
      {
        fileName: "app/components/PostForm.tsx",
        lineNumber: 46,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV10(Label, { htmlFor: "description", children: "Meta Description (optional)" }, void 0, !1, {
      fileName: "app/components/PostForm.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(
      Input,
      {
        as: "textarea",
        name: "description",
        id: "description",
        className: "font-mono w-full",
        cols: 80,
        defaultValue: post == null ? void 0 : post.description
      },
      void 0,
      !1,
      {
        fileName: "app/components/PostForm.tsx",
        lineNumber: 56,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV10(Label, { htmlFor: "created_at", children: "Date (optional)" }, void 0, !1, {
      fileName: "app/components/PostForm.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(
      Input,
      {
        type: "date",
        name: "created_at",
        id: "created_at",
        className: "w-full",
        defaultValue: post == null ? void 0 : post.created_at
      },
      void 0,
      !1,
      {
        fileName: "app/components/PostForm.tsx",
        lineNumber: 66,
        columnNumber: 7
      },
      this
    ),
    isEdit && /* @__PURE__ */ jsxDEV10(Fragment5, { children: [
      /* @__PURE__ */ jsxDEV10(Label, { htmlFor: "status", children: "Status" }, void 0, !1, {
        fileName: "app/components/PostForm.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10(
        Input,
        {
          as: "select",
          name: "status",
          id: "status",
          className: "w-full font-mono",
          defaultValue: post == null ? void 0 : post.status,
          children: [
            /* @__PURE__ */ jsxDEV10("option", { value: "draft", children: "Draft" }, void 0, !1, {
              fileName: "app/components/PostForm.tsx",
              lineNumber: 84,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV10("option", { value: "published", children: "Published" }, void 0, !1, {
              fileName: "app/components/PostForm.tsx",
              lineNumber: 85,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/PostForm.tsx",
          lineNumber: 77,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/PostForm.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this),
    (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsxDEV10(ValidationError, { children: actionData.error }, void 0, !1, {
      fileName: "app/components/PostForm.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "text-right", children: /* @__PURE__ */ jsxDEV10(Button, { type: "submit", children: [
      post ? "Update" : "Create",
      " Post"
    ] }, void 0, !0, {
      fileName: "app/components/PostForm.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/PostForm.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PostForm.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/components/Heading.tsx
import clsx5 from "clsx";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function Heading({
  children,
  className
}) {
  return /* @__PURE__ */ jsxDEV11(
    "h1",
    {
      className: clsx5(
        "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
        className
      ),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/Heading.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}

// app/components/SimpleLayout.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function SimpleLayout({
  title,
  intro,
  children
}) {
  return /* @__PURE__ */ jsxDEV12(Container, { className: "mt-16 sm:mt-32", children: [
    /* @__PURE__ */ jsxDEV12("header", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxDEV12(Heading, { children: title }, void 0, !1, {
        fileName: "app/components/SimpleLayout.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("p", { className: "mt-6 text-base text-zinc-600 dark:text-zinc-400", children: intro }, void 0, !1, {
        fileName: "app/components/SimpleLayout.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SimpleLayout.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "mt-16 sm:mt-20", children }, void 0, !1, {
      fileName: "app/components/SimpleLayout.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SimpleLayout.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/posts.$slug.edit.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
async function loader3({ params, context: { auth, DB } }) {
  if (!await auth.check())
    return redirect3("/auth/login");
  let post = await DB.prepare("SELECT * FROM posts WHERE slug = ?").bind(params.slug).first();
  return json3({
    post
  });
}
var badRequest2 = (error) => json3({ error }, { status: 400 });
async function action2({ request, params, context: { DB } }) {
  let post = await DB.prepare("SELECT id FROM posts WHERE slug = ?").bind(params.slug).first(), postId = post == null ? void 0 : post.id, form = new URLSearchParams(await request.text()), title = form.get("title"), content = form.get("content"), description = form.get("description"), createdAt = form.get("created_at"), slug = form.get("slug"), status = form.get("status"), requiredFields = ["title", "slug", "status"];
  for (let field of requiredFields)
    if (!form.get(field))
      return badRequest2(`Missing ${field}`);
  let fields = ["title", "content", "slug", "status", "description"], bindings = [
    title,
    content,
    slug,
    status,
    description
  ];
  return createdAt && (fields.push("created_at"), bindings.push(createdAt)), bindings.push(postId), await DB.prepare(
    `UPDATE posts SET ${fields.map((field) => field + " = ?").join(", ")} where id = ?`
  ).bind(...bindings).run(), redirect3(`/posts/${slug}`);
}
function meta2({ data }) {
  let { post } = data;
  return {
    title: `Editing ${post.title}`,
    description: "Edit this post"
  };
}
function EditPost() {
  let { post } = useLoaderData();
  return /* @__PURE__ */ jsxDEV13(SimpleLayout, { title: "Edit Post", intro: "Edit this post", children: /* @__PURE__ */ jsxDEV13(PostForm, { post }, void 0, !1, {
    fileName: "app/routes/posts.$slug.edit.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts.$slug.edit.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/auth.register.tsx
var auth_register_exports = {};
__export(auth_register_exports, {
  action: () => action,
  default: () => Register,
  loader: () => loader
});

// app/components/LoginForm.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function LoginForm({ isRegister = !1 }) {
  let actionData = useActionData();
  return /* @__PURE__ */ jsxDEV14(Form, { method: "post", replace: !0, children: [
    /* @__PURE__ */ jsxDEV14(
      "input",
      {
        type: "hidden",
        name: "intent",
        value: isRegister ? INTENTS.register : INTENTS.login
      },
      void 0,
      !1,
      {
        fileName: "app/components/LoginForm.tsx",
        lineNumber: 10,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV14(Label, { htmlFor: "email", children: "Email" }, void 0, !1, {
      fileName: "app/components/LoginForm.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14(Input, { type: "email", id: "email", name: "email", className: "w-full" }, void 0, !1, {
      fileName: "app/components/LoginForm.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14(Label, { htmlFor: "password", children: "Password" }, void 0, !1, {
      fileName: "app/components/LoginForm.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14(Input, { type: "password", id: "password", name: "password", className: "w-full" }, void 0, !1, {
      fileName: "app/components/LoginForm.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsxDEV14(ValidationError, { children: actionData.error }, void 0, !1, {
      fileName: "app/components/LoginForm.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "text-right", children: /* @__PURE__ */ jsxDEV14(Button, { type: "submit", children: isRegister ? "Register" : "Log in" }, void 0, !1, {
      fileName: "app/components/LoginForm.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/LoginForm.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/LoginForm.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/auth.register.tsx
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
function Register() {
  return /* @__PURE__ */ jsxDEV15(SimpleLayout, { title: "Register", intro: "You probably shouldn't be here", children: /* @__PURE__ */ jsxDEV15(LoginForm, { isRegister: !0 }, void 0, !1, {
    fileName: "app/routes/auth.register.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.register.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/posts.$slug.tsx
var posts_slug_exports = {};
__export(posts_slug_exports, {
  default: () => PostView,
  loader: () => loader4,
  meta: () => meta3
});
import { json as json4 } from "@remix-run/cloudflare";
import { useNavigate as useNavigate2 } from "react-router";

// app/components/Prose.tsx
import clsx6 from "clsx";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function Prose({
  className,
  html
}) {
  return /* @__PURE__ */ jsxDEV16(
    "div",
    {
      className: clsx6(className, "prose dark:prose-invert"),
      dangerouslySetInnerHTML: { __html: html }
    },
    void 0,
    !1,
    {
      fileName: "app/components/Prose.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}

// app/utils/date.ts
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  });
}

// app/utils/markdown.ts
import { marked } from "marked";
import hljs from "highlight.js";
async function convertToHtml(input) {
  return marked(input, {
    breaks: !0,
    gfm: !0,
    headerIds: !1,
    smartLists: !0,
    smartypants: !0,
    highlight: (code, lang) => hljs.highlight(code, {
      language: lang
    }).value
  });
}

// app/routes/posts.$slug.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
async function loader4({ params, context: { DB, auth } }) {
  let { slug } = params, post = await DB.prepare("SELECT * FROM posts WHERE slug = ?1 LIMIT 1").bind(slug).first();
  if (!post)
    throw new Response("Not found", { status: 404 });
  return json4({
    post: {
      ...post,
      content: await convertToHtml(post.content)
    },
    isLoggedIn: await auth.check()
  });
}
function meta3({ data }) {
  let { post } = data;
  return {
    title: post.title,
    description: post.description
  };
}
function PostView() {
  let navigate = useNavigate2(), { post, isLoggedIn } = useLoaderData();
  return /* @__PURE__ */ jsxDEV17(Container, { className: "mt-16 lg:mt-32", children: /* @__PURE__ */ jsxDEV17("div", { className: "xl:relative", children: /* @__PURE__ */ jsxDEV17("div", { className: "mx-auto max-w-2xl", children: [
    /* @__PURE__ */ jsxDEV17(
      "button",
      {
        type: "button",
        onClick: () => navigate(-1),
        "aria-label": "Go back to articles",
        className: "group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0",
        children: /* @__PURE__ */ jsxDEV17(ArrowLeftIcon, { className: "h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" }, void 0, !1, {
          fileName: "app/routes/posts.$slug.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/posts.$slug.tsx",
        lineNumber: 46,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ jsxDEV17("article", { children: [
      /* @__PURE__ */ jsxDEV17("header", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxDEV17("h1", { className: "mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl", children: [
          post.title,
          post.status === "draft" && /* @__PURE__ */ jsxDEV17("span", { className: "text-zinc-400 dark:text-zinc-500", children: [
            " ",
            "(Draft)"
          ] }, void 0, !0, {
            fileName: "app/routes/posts.$slug.tsx",
            lineNumber: 59,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/posts.$slug.tsx",
          lineNumber: 56,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV17(
          "time",
          {
            dateTime: post.created_at,
            className: "order-first flex items-center text-base text-zinc-400 dark:text-zinc-500",
            children: [
              /* @__PURE__ */ jsxDEV17("span", { className: "h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" }, void 0, !1, {
                fileName: "app/routes/posts.$slug.tsx",
                lineNumber: 69,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV17("span", { className: "ml-3", children: formatDate(post.created_at) }, void 0, !1, {
                fileName: "app/routes/posts.$slug.tsx",
                lineNumber: 70,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/posts.$slug.tsx",
            lineNumber: 65,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/posts.$slug.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this),
      isLoggedIn && /* @__PURE__ */ jsxDEV17(Link, { to: `/posts/${post.slug}/edit`, children: "Edit" }, void 0, !1, {
        fileName: "app/routes/posts.$slug.tsx",
        lineNumber: 73,
        columnNumber: 28
      }, this),
      /* @__PURE__ */ jsxDEV17(Prose, { className: "mt-8", html: post.content }, void 0, !1, {
        fileName: "app/routes/posts.$slug.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts.$slug.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts.$slug.tsx",
    lineNumber: 45,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts.$slug.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts.$slug.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
function ArrowLeftIcon(props) {
  return /* @__PURE__ */ jsxDEV17("svg", { viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", ...props, children: /* @__PURE__ */ jsxDEV17(
    "path",
    {
      d: "M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/posts.$slug.tsx",
      lineNumber: 85,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/posts.$slug.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/auth.login.tsx
var auth_login_exports = {};
__export(auth_login_exports, {
  action: () => action,
  default: () => Login,
  loader: () => loader
});
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
function Login() {
  return /* @__PURE__ */ jsxDEV18(SimpleLayout, { title: "Log in", intro: "You probably shouldn't be here", children: /* @__PURE__ */ jsxDEV18(LoginForm, {}, void 0, !1, {
    fileName: "app/routes/auth.login.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/posts.new.tsx
var posts_new_exports = {};
__export(posts_new_exports, {
  action: () => action3,
  default: () => NewPost,
  loader: () => loader5
});
import { json as json5, redirect as redirect4 } from "@remix-run/cloudflare";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
async function loader5({ request, context: { auth } }) {
  return await auth.check() ? {} : redirect4("/auth/login");
}
async function action3({ request, context: { DB, auth } }) {
  let form = new URLSearchParams(await request.text()), title = form.get("title"), content = form.get("content"), description = form.get("description"), createdAt = form.get("created_at"), userId = await auth.id();
  if (!title)
    return json5(
      {
        error: "Missing title"
      },
      { status: 400 }
    );
  let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), fields = [
    "title",
    "content",
    "slug",
    "status",
    "description",
    "user_id"
  ], bindings = [title, content, slug, "draft", description, userId];
  return createdAt && (fields.push("created_at"), bindings.push(createdAt)), await DB.prepare(
    `INSERT INTO posts (${fields.join(", ")}) VALUES (${fields.map(() => "?").join(", ")})`
  ).bind(...bindings).run(), redirect4(`/posts/${slug}`);
}
function NewPost() {
  return /* @__PURE__ */ jsxDEV19(SimpleLayout, { title: "New Post", intro: "Create a new post", children: /* @__PURE__ */ jsxDEV19(PostForm, {}, void 0, !1, {
    fileName: "app/routes/posts.new.tsx",
    lineNumber: 64,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts.new.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  meta: () => meta5
});
import clsx7 from "clsx";

// app/components/SocialIcons.tsx
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function TwitterIcon(props) {
  return /* @__PURE__ */ jsxDEV20("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", ...props, children: /* @__PURE__ */ jsxDEV20("path", { d: "M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z" }, void 0, !1, {
    fileName: "app/components/SocialIcons.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/SocialIcons.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
function InstagramIcon(props) {
  return /* @__PURE__ */ jsxDEV20("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", ...props, children: [
    /* @__PURE__ */ jsxDEV20("path", { d: "M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z" }, void 0, !1, {
      fileName: "app/components/SocialIcons.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20("path", { d: "M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z" }, void 0, !1, {
      fileName: "app/components/SocialIcons.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SocialIcons.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
function GitHubIcon(props) {
  return /* @__PURE__ */ jsxDEV20("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", ...props, children: /* @__PURE__ */ jsxDEV20(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
    },
    void 0,
    !1,
    {
      fileName: "app/components/SocialIcons.tsx",
      lineNumber: 23,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/SocialIcons.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function LinkedInIcon(props) {
  return /* @__PURE__ */ jsxDEV20("svg", { viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsxDEV20("path", { d: "M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" }, void 0, !1, {
    fileName: "app/components/SocialIcons.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/SocialIcons.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/images/josh.jpeg
var josh_default = "/build/_assets/josh-IIHLW2BZ.jpeg";

// mdx:prose/about.md
import React6 from "react";
function MDXContent(props = {}) {
  let _components = Object.assign({
    p: "p",
    strong: "strong",
    h2: "h2",
    a: "a",
    em: "em",
    ul: "ul",
    li: "li"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement(_components.p, null, "I was born and raised in ", /* @__PURE__ */ React6.createElement(_components.strong, null, "Iowa"), ", which is smack-dab in the middle of the United States. I grew up in a rural area, surrounded by corn and bean fields."), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "Now, I live and work in ", /* @__PURE__ */ React6.createElement(_components.strong, null, "Waukee, Iowa"), ", which is a suburb of Des Moines. It's a quaint but quickly-growing town with good schools and lots of opportunities."), `
`, /* @__PURE__ */ React6.createElement(_components.h2, null, "Professional Life"), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "I'm a senior staff developer at ", /* @__PURE__ */ React6.createElement(_components.strong, null, /* @__PURE__ */ React6.createElement(_components.a, { href: "https://shopify.com" }, "Shopify")), " on the Custom Storefronts team. I'm building ", /* @__PURE__ */ React6.createElement(_components.strong, null, /* @__PURE__ */ React6.createElement(_components.a, { href: "https://shopify.dev/hydrogen" }, "Hydrogen")), " which is a new React meta-framework powering custom storefronts for Shopify merchants."), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "Prior to this, I was a software engineer at ", /* @__PURE__ */ React6.createElement(_components.strong, null, /* @__PURE__ */ React6.createElement(_components.a, { href: "https://voxmedia.com" }, "Vox Media")), ". I was part of the ", /* @__PURE__ */ React6.createElement(_components.strong, null, "Concert Platforms"), " team, which supports the engineering products behind ", /* @__PURE__ */ React6.createElement(_components.strong, null, /* @__PURE__ */ React6.createElement(_components.a, { href: "https://concert.io" }, "Concert")), ", a premium digital advertising marketplace."), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "I served as a technical lead on my team for our ", /* @__PURE__ */ React6.createElement(_components.strong, null, "ad placement library"), " written in JavaScript, which is responsible for taking ads delivered by our ad server and inserting them into the article a user is reading in a friendly, non-obtrusive way."), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "I also pioneered efforts to create a ", /* @__PURE__ */ React6.createElement(_components.strong, null, "real-time bidding server"), " which serves Concert ad creative to our 100+ Concert network publisher partners. It was a thrill to build a service that scales to ", /* @__PURE__ */ React6.createElement(_components.strong, null, "1+ billion monthly requests"), " and to see it contribute directly to the company's bottom line \u{1F389}."), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "More recently, I led our team to build a ", /* @__PURE__ */ React6.createElement(_components.strong, null, /* @__PURE__ */ React6.createElement(_components.a, { href: "https://admanager.concert.io" }, "self-service ad builder tool")), " to support local advertisers and growth accounts at scale. We built an amazing end-to-end user flow with React and GraphQL for the entire ad creation process, from uploading assets to entering payment details."), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "I really enjoyed working at Vox Media because I could ", /* @__PURE__ */ React6.createElement(_components.strong, null, "work from home"), " along with my other talented colleagues across the globe. The culture is very nurturing, diverse and respectful. I love that I can go for a random afternoon jog and not have to make up the time later on, or mark a timesheet at the end of the day, or ask my boss for permission. I think a lot of workplaces ", /* @__PURE__ */ React6.createElement(_components.em, null, "could"), " be like this, but the leaders do not place the amount of ", /* @__PURE__ */ React6.createElement(_components.strong, null, "trust"), " Vox Media places in its employees to do good work without micromanagement."), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "Prior to Vox Media, I was a ", /* @__PURE__ */ React6.createElement(_components.strong, null, "lead developer"), " at an ", /* @__PURE__ */ React6.createElement(_components.a, { href: "https://itsahappymedium.com" }, "ad agency"), " where we created a bunch of cool WordPress websites for lots of small regional clients."), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "In 2019, my wife and I founded a startup called ", /* @__PURE__ */ React6.createElement(_components.a, { href: "https://www.barkpass.com" }, "Barkpass"), ", a dog park management and pet licensing software for local goverment and small businesses. We operate it on our own time, but we hope to invest more time into it as the business grows."), `
`, /* @__PURE__ */ React6.createElement(_components.h2, null, "Personal Life"), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "I married ", /* @__PURE__ */ React6.createElement(_components.strong, null, /* @__PURE__ */ React6.createElement(_components.a, { href: "https://briannelarson.com" }, "Bri")), " in 2015, and we had a son ", /* @__PURE__ */ React6.createElement(_components.strong, null, "Barrett"), " in 2020. Our dogs ", /* @__PURE__ */ React6.createElement(_components.strong, null, "Luna and Sonny"), " keep us company. We get along awfully well together."), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "Our hobbies include watching almost every television show known to humankind, going on walks with our dogs, and hosting variety shows in our basement."), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, /* @__PURE__ */ React6.createElement(_components.strong, null, "Music"), " is a big thing in my life. I joined band in elementary school and learned how to play the piano, clarinet, tenor saxophone, and guitar. I joined the marching band at Iowa State University, as a sax the first three years and finally as a drum major my senior year. It was one of the most worthwhile and valuable experiences in my life. I still enjoy playing music with friends when I get the chance, and fiddling around on the piano during the day."), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "I studied ", /* @__PURE__ */ React6.createElement(_components.strong, null, "journalism"), " and ", /* @__PURE__ */ React6.createElement(_components.strong, null, "Spanish"), " while I was in college. Guess what? I don't work in either of those fields! But I did start my career as a broadcast TV producer at the local CBS affiliate in Des Moines. I produced the weekend morning news. I also did some ", /* @__PURE__ */ React6.createElement(_components.a, { href: "/glances/reporter-davinci" }, "on"), "-", /* @__PURE__ */ React6.createElement(_components.a, { href: "/glances/reporter-charter-school" }, "air"), " ", /* @__PURE__ */ React6.createElement(_components.a, { href: "/glances/reporter-inmate-security" }, "reporting"), " as an intern. It was neat, but it was also a ton of work for not a ton of reward."), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "I was in ", /* @__PURE__ */ React6.createElement(_components.strong, null, "Scouts"), " as a kid, and I achieved the rank of Eagle Scout. I can't wait to get my kid(s) involved someday!"), `
`, /* @__PURE__ */ React6.createElement(_components.h2, null, "Miscellaneous Life"), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "When I find the time, I try to give back to the community. I serve as the ", /* @__PURE__ */ React6.createElement(_components.strong, null, "treasurer"), " of the local chapter of the Lions Club, where we offer free vision screenings to children in local schools and daycares, provide eyeglasses and discounted checkups for adults in need, and hold fundraisers and food drives for folks who need help feeding their families."), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "I'm a ", /* @__PURE__ */ React6.createElement(_components.strong, null, "co-organizer"), " of a monthly ", /* @__PURE__ */ React6.createElement(_components.a, { href: "https://dsmwebgeeks.com" }, "local web meetup"), ", where I push to recruit membership and speakers from diverse and underrepresented backgrounds."), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "I'm also a ", /* @__PURE__ */ React6.createElement(_components.strong, null, "mentor"), " for the ", /* @__PURE__ */ React6.createElement(_components.a, { href: "https://apex.waukeeschools.org/" }, "Waukee APEX"), " technology program for high school students, where I help teach software development using real-world, hands-on projects like Barkpass."), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "Bri and I ", /* @__PURE__ */ React6.createElement(_components.strong, null, "built and maintain"), " the website for a ", /* @__PURE__ */ React6.createElement(_components.a, { href: "https://aheinz57.com" }, "local pet rescue"), ". It's also where we adopted our first dog, Luna!"), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "Since 2016, I've been going to a ", /* @__PURE__ */ React6.createElement(_components.strong, null, "CrossFit"), " gym. It's been one of the best communities I've ever joined, and I really enjoy the health benefits and accountability of working up a few times per week."), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "In the past, I've been a ", /* @__PURE__ */ React6.createElement(_components.strong, null, "newsletter editor"), " of my college alumni band, an alumni ", /* @__PURE__ */ React6.createElement(_components.strong, null, "adviser"), " and ", /* @__PURE__ */ React6.createElement(_components.strong, null, "treasurer"), " for my college fraternity Beta Theta Pi, and a ", /* @__PURE__ */ React6.createElement(_components.strong, null, "videographer"), " for my college marching band."), `
`, /* @__PURE__ */ React6.createElement(_components.h2, null, "My Principles"), `
`, /* @__PURE__ */ React6.createElement(_components.p, null, "Here are some of my principles. These will change as I change, but they feel pretty good at the time of writing. Maybe they'll feel good to you, too, if you enjoy the ideas of a 30-year-old moron on the internet:"), `
`, /* @__PURE__ */ React6.createElement(_components.ul, null, `
`, /* @__PURE__ */ React6.createElement(_components.li, null, /* @__PURE__ */ React6.createElement(_components.strong, null, "I'm a creator, not a critic"), ". I've started noticing two distinct groups of people emerge in my life: creators and critics. There is no better place to notice this than the dumpster fire that is Twitter \u2014\xA0where only hot takes and put-downs gain any traction. It's ", /* @__PURE__ */ React6.createElement(_components.em, null, "incredibly"), " easy to put down someone or something, and it's so ridiculously hard to create something in earnest. ", /* @__PURE__ */ React6.createElement(_components.a, { href: "https://www.goodreads.com/quotes/7280972-i-want-to-be-in-the-arena-i-want-to" }, "I want to be in the arena"), " and be a creator, and I love finding other likeminded creators."), `
`, /* @__PURE__ */ React6.createElement(_components.li, null, /* @__PURE__ */ React6.createElement(_components.strong, null, "Micro-activism will always beat macro-activism"), ". I'd rather put my time, money and effort into improving the lives of people in my community than posting memes about presidential candidates 80 times a day or joining a pile-on about some brand's latest Twitter gaffe. If we spent more time caring about our neighbors and community leaders and less time being outraged about something happening thousands of miles away, we'd live in a happier and more just society. This doesn't mean macro-activism doesn't have its place: system racism and sexism exist at a macro level, and breaking down those walls requires both micro- and macro-activism. But I think micro-activism is absolutely necessary to get us there."), `
`, /* @__PURE__ */ React6.createElement(_components.li, null, /* @__PURE__ */ React6.createElement(_components.strong, null, "Curiousity is at the root of growth"), ". I've learned so much by being curious and open to new ideas. The best people I've known and worked with are constantly curious. I'd hate to be surrounded by people who think they know how everything works \u2014\xA0or don't know, and don't care to know."), `
`, /* @__PURE__ */ React6.createElement(_components.li, null, /* @__PURE__ */ React6.createElement(_components.strong, null, "Self-worth drives outward action"), ". This is a hard lesson I've learned in my 30 years on this planet. When we don't feel ", /* @__PURE__ */ React6.createElement(_components.em, null, "good enough"), " or ", /* @__PURE__ */ React6.createElement(_components.em, null, "fit enough"), " or ", /* @__PURE__ */ React6.createElement(_components.em, null, "worthy enough"), ", we often project these emotions onto other people in the form of anger, mistrust, and greed. I've been guilty of this many times. Thankfully, I've been reading a lot of ", /* @__PURE__ */ React6.createElement(_components.a, { href: "https://brenebrown.com/" }, "Bren\xE9 Brown"), " and have been working on ", /* @__PURE__ */ React6.createElement(_components.em, null, "Rising Strong"), " in my life. It's also illuminating to see that when other people lash out and put you down, it's ", /* @__PURE__ */ React6.createElement(_components.em, null, "almost always"), " driven by their own insecurity and lack of self-worth."), `
`, /* @__PURE__ */ React6.createElement(_components.li, null, /* @__PURE__ */ React6.createElement(_components.strong, null, "People are universally complex"), `. Every single person has a unique story, and their actions and feelings are the result of their own histories. They are complicated, lovely shades of gray. It's important to see this in everyone in order to grow closer. It's also important to watch out for the opposite: With few exceptions, if a person tries to convince you that someone is "evil" or "irredeemable," you might want to evaluate this person's motives. The same goes for if someone can "do no wrong" or has no faults in a person's eyes.`), `
`));
  return MDXLayout ? /* @__PURE__ */ React6.createElement(MDXLayout, { ...props }, _content) : _content;
}
var about_default = MDXContent;
var headers = typeof attributes < "u" && attributes.headers, meta4 = typeof attributes < "u" && attributes.meta, handle = typeof attributes < "u" && attributes.handle;

// app/routes/about.tsx
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
function meta5() {
  return {
    title: "About Josh Larson",
    description: "Here's some stuff about Josh Larson. I bet you're glad you found this page."
  };
}
function About() {
  return /* @__PURE__ */ jsxDEV21(Container, { className: "mt-16 sm:mt-32", children: /* @__PURE__ */ jsxDEV21("div", { className: "grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12", children: [
    /* @__PURE__ */ jsxDEV21("div", { className: "lg:pl-20", children: /* @__PURE__ */ jsxDEV21("div", { className: "max-w-xs px-2.5 lg:max-w-none", children: /* @__PURE__ */ jsxDEV21(
      "img",
      {
        src: josh_default,
        alt: "",
        sizes: "(min-width: 1024px) 32rem, 20rem",
        className: "aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/about.tsx",
        lineNumber: 26,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV21("div", { className: "lg:order-first lg:row-span-2", children: [
      /* @__PURE__ */ jsxDEV21("h1", { className: "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl", children: "I\u2019m Josh Larson. Here's a little bit about me..." }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21("div", { className: "mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 prose dark:prose-invert", children: /* @__PURE__ */ jsxDEV21(about_default, {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV21("div", { className: "lg:pl-20", children: /* @__PURE__ */ jsxDEV21("ul", { children: [
      /* @__PURE__ */ jsxDEV21(SocialLink, { to: "https://jplhomer.org", icon: TwitterIcon, children: "Follow on Twitter" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV21(
        SocialLink,
        {
          to: "https://instagram.com/jplhomer",
          icon: InstagramIcon,
          className: "mt-4",
          children: "Follow on Instagram"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 47,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV21(
        SocialLink,
        {
          to: "https://www.linkedin.com/in/jplhomer/",
          icon: GitHubIcon,
          className: "mt-4",
          children: "Follow on GitHub"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 54,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV21(
        SocialLink,
        {
          to: "https://linkedin.com/jphomer",
          icon: LinkedInIcon,
          className: "mt-4",
          children: "Follow on LinkedIn"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 61,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV21(
        SocialLink,
        {
          to: "mailto:jplhomer@gmail.com",
          icon: MailIcon,
          className: "mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40",
          children: "jplhomer@gmail.com"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 68,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function SocialLink({
  className,
  to,
  children,
  icon: Icon
}) {
  return /* @__PURE__ */ jsxDEV21("li", { className: clsx7(className, "flex"), children: /* @__PURE__ */ jsxDEV21(
    "a",
    {
      href: to,
      className: "group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500",
      children: [
        /* @__PURE__ */ jsxDEV21(Icon, { className: "h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 99,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV21("span", { className: "ml-4", children }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 100,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/about.tsx",
      lineNumber: 95,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}
function MailIcon(props) {
  return /* @__PURE__ */ jsxDEV21("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", ...props, children: /* @__PURE__ */ jsxDEV21(
    "path",
    {
      fillRule: "evenodd",
      d: "M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/about.tsx",
      lineNumber: 109,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader6
});
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
async function loader6({ context: { auth } }) {
  let user = await auth.user();
  return console.log({ user }), {};
}
function Index() {
  return /* @__PURE__ */ jsxDEV22(Container, { className: "mt-9", children: /* @__PURE__ */ jsxDEV22("p", { children: "Hello, world" }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/posts.tsx
var posts_exports = {};
__export(posts_exports, {
  default: () => PostsIndex,
  loader: () => loader7,
  meta: () => meta6
});
import { json as json6 } from "@remix-run/cloudflare";
import invariant2 from "tiny-invariant";

// app/components/Card.tsx
import clsx8 from "clsx";
import { Fragment as Fragment6, jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
function ChevronRightIcon(props) {
  return /* @__PURE__ */ jsxDEV23("svg", { viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", ...props, children: /* @__PURE__ */ jsxDEV23(
    "path",
    {
      d: "M6.75 5.75 9.25 8l-2.5 2.25",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Card.tsx",
      lineNumber: 8,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Card.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function Card({
  as: Component = "div",
  className,
  children
}) {
  return /* @__PURE__ */ jsxDEV23(
    Component,
    {
      className: clsx8(className, "group relative flex flex-col items-start"),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/Card.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}
Card.Link = function({
  children,
  to,
  ...props
}) {
  let innerChild = /* @__PURE__ */ jsxDEV23(Fragment6, { children: [
    /* @__PURE__ */ jsxDEV23("span", { className: "absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" }, void 0, !1, {
      fileName: "app/components/Card.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV23("span", { className: "relative z-10", children }, void 0, !1, {
      fileName: "app/components/Card.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Card.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this), isExternalLink = to.startsWith("http");
  return /* @__PURE__ */ jsxDEV23(Fragment6, { children: [
    /* @__PURE__ */ jsxDEV23("div", { className: "absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" }, void 0, !1, {
      fileName: "app/components/Card.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    isExternalLink ? /* @__PURE__ */ jsxDEV23("a", { href: to, ...props, children: innerChild }, void 0, !1, {
      fileName: "app/components/Card.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV23(Link, { to, prefetch: "intent", ...props, children: innerChild }, void 0, !1, {
      fileName: "app/components/Card.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Card.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
};
Card.Title = function({
  as: Component = "h2",
  to,
  children
}) {
  return /* @__PURE__ */ jsxDEV23(Component, { className: "text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100", children: to ? /* @__PURE__ */ jsxDEV23(Card.Link, { to, children }, void 0, !1, {
    fileName: "app/components/Card.tsx",
    lineNumber: 79,
    columnNumber: 13
  }, this) : children }, void 0, !1, {
    fileName: "app/components/Card.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
};
Card.Description = function({
  children
}) {
  return /* @__PURE__ */ jsxDEV23("p", { className: "relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400", children }, void 0, !1, {
    fileName: "app/components/Card.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
};
Card.Cta = function({ children }) {
  return /* @__PURE__ */ jsxDEV23(
    "div",
    {
      "aria-hidden": "true",
      className: "relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500",
      children: [
        children,
        /* @__PURE__ */ jsxDEV23(ChevronRightIcon, { className: "ml-1 h-4 w-4 stroke-current" }, void 0, !1, {
          fileName: "app/components/Card.tsx",
          lineNumber: 103,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Card.tsx",
      lineNumber: 98,
      columnNumber: 5
    },
    this
  );
};
Card.Eyebrow = function({
  as: Component = "p",
  decorate = !1,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV23(
    Component,
    {
      className: clsx8(
        className,
        "relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500",
        decorate && "pl-3.5"
      ),
      ...props,
      children: [
        decorate && /* @__PURE__ */ jsxDEV23(
          "span",
          {
            className: "absolute inset-y-0 left-0 flex items-center",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsxDEV23("span", { className: "h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" }, void 0, !1, {
              fileName: "app/components/Card.tsx",
              lineNumber: 134,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Card.tsx",
            lineNumber: 130,
            columnNumber: 9
          },
          this
        ),
        children
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Card.tsx",
      lineNumber: 121,
      columnNumber: 5
    },
    this
  );
};

// app/routes/posts.tsx
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
async function loader7({ context: { DB, auth } }) {
  let where = await auth.check() ? "" : "WHERE status = 'published'", posts = await DB.prepare(
    `SELECT * FROM posts ${where} ORDER BY created_at DESC`
  ).all();
  return invariant2(posts.results, "Something went wrong when querying posts."), json6({ posts: posts.results });
}
function meta6() {
  return {
    title: "Posts written by Josh Larson",
    description: "In which I write about a wide gamut of topics. Strap in \u2014\xA0this is going to be fun."
  };
}
function PostsIndex() {
  let { posts } = useLoaderData();
  return /* @__PURE__ */ jsxDEV24(
    SimpleLayout,
    {
      title: "Musings about life, software, music, parenting and more.",
      intro: "In which I write about a wide gamut of topics. Strap in \u2014\xA0this is going to be fun.",
      children: /* @__PURE__ */ jsxDEV24("div", { className: "md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40", children: /* @__PURE__ */ jsxDEV24("div", { className: "flex max-w-3xl flex-col space-y-16", children: posts.map((post) => /* @__PURE__ */ jsxDEV24(Article, { post }, post.slug, !1, {
        fileName: "app/routes/posts.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/posts.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/posts.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/posts.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  );
}
function Article({ post }) {
  return /* @__PURE__ */ jsxDEV24("article", { className: "md:grid md:grid-cols-4 md:items-baseline", children: [
    /* @__PURE__ */ jsxDEV24(Card, { className: "md:col-span-3", children: [
      /* @__PURE__ */ jsxDEV24(Card.Title, { to: `/posts/${post.slug}`, children: [
        post.title,
        post.status === "draft" && " (DRAFT)"
      ] }, void 0, !0, {
        fileName: "app/routes/posts.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV24(
        Card.Eyebrow,
        {
          as: "time",
          dateTime: post.created_at,
          className: "md:hidden",
          decorate: !0,
          children: formatDate(post.created_at)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/posts.tsx",
          lineNumber: 57,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV24(Card.Description, { children: post.description }, void 0, !1, {
        fileName: "app/routes/posts.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV24(Card.Cta, { children: "Read post" }, void 0, !1, {
        fileName: "app/routes/posts.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV24(
      Card.Eyebrow,
      {
        as: "time",
        dateTime: post.created_at,
        className: "mt-1 hidden md:block",
        children: formatDate(post.created_at)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/posts.tsx",
        lineNumber: 68,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/posts.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// app/routes/uses.tsx
var uses_exports = {};
__export(uses_exports, {
  default: () => Uses,
  meta: () => meta7
});

// app/components/Section.tsx
import { useId } from "react";
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
function Section({
  title,
  children
}) {
  let id = useId();
  return /* @__PURE__ */ jsxDEV25(
    "section",
    {
      "aria-labelledby": id,
      className: "md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40",
      children: /* @__PURE__ */ jsxDEV25("div", { className: "grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxDEV25(
          "h2",
          {
            id,
            className: "text-sm font-semibold text-zinc-800 dark:text-zinc-100",
            children: title
          },
          void 0,
          !1,
          {
            fileName: "app/components/Section.tsx",
            lineNumber: 18,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV25("div", { className: "md:col-span-3", children }, void 0, !1, {
          fileName: "app/components/Section.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Section.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Section.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
}

// app/routes/uses.tsx
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
function meta7() {
  return {
    title: "Uses - Josh Larson",
    description: "Software I use, gadgets I love, and other things I recommend."
  };
}
function Uses() {
  return /* @__PURE__ */ jsxDEV26(
    SimpleLayout,
    {
      title: "The things I use",
      intro: "Some poeple are interested in the things other people use to do their daily work. Here is one of those lists.",
      children: /* @__PURE__ */ jsxDEV26("div", { className: "space-y-20", children: [
        /* @__PURE__ */ jsxDEV26(ToolsSection, { title: "Workstation", children: [
          /* @__PURE__ */ jsxDEV26(Tool, { title: "13\u201D MacBook Air, M1, Rose Gold, 16GB RAM (2020)", children: "M1 is great. I don't even need all the RAM I had before. It feels like the battery lasts all week, and it's super lightweight and portable. Love the color, too. YOLO." }, void 0, !1, {
            fileName: "app/routes/uses.tsx",
            lineNumber: 21,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV26(Tool, { title: "TODO: 4K Monitor", children: "My pals at Shopify sent me this, and it's really nice to have a High DPI display to work on." }, void 0, !1, {
            fileName: "app/routes/uses.tsx",
            lineNumber: 26,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV26(Tool, { title: "Regular Apple Keyboard", children: "I'm not a keyboard snob. It gets the job done." }, void 0, !1, {
            fileName: "app/routes/uses.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV26(Tool, { title: "USB Mouse", children: "It's not even that good. Shopify sent it to me, and it allows me to point and click on things." }, void 0, !1, {
            fileName: "app/routes/uses.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV26(Tool, { title: "TODO Standing Desk", children: `It's very, very nice. I used to have a white Autonomous, but this one feels much more solid and "at home" than the corporate-feeling Autonomous desk.` }, void 0, !1, {
            fileName: "app/routes/uses.tsx",
            lineNumber: 37,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/uses.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV26(ToolsSection, { title: "Development tools", children: [
          /* @__PURE__ */ jsxDEV26(Tool, { title: "VSCode", children: "It's dope. Works well for my Laravel and React projects." }, void 0, !1, {
            fileName: "app/routes/uses.tsx",
            lineNumber: 44,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV26(Tool, { title: "Hyper", children: "It's a neat terminal made by Vercel." }, void 0, !1, {
            fileName: "app/routes/uses.tsx",
            lineNumber: 47,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/uses.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV26(ToolsSection, { title: "Design", children: /* @__PURE__ */ jsxDEV26(Tool, { title: "Figma", children: "We started using Figma as just a design tool but now it\u2019s become our virtual whiteboard for the entire company. Never would have expected the collaboration features to be the real hook." }, void 0, !1, {
          fileName: "app/routes/uses.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/uses.tsx",
          lineNumber: 49,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV26(ToolsSection, { title: "Productivity", children: [
          /* @__PURE__ */ jsxDEV26(Tool, { title: "LogSeq", children: "I use it for journaling and note-taking. It\u2019s a great tool for TODOs and keeping track of things I want to do. Very helpful for work." }, void 0, !1, {
            fileName: "app/routes/uses.tsx",
            lineNumber: 57,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV26(Tool, { title: "Reminders (iOS)", children: "I ask Siri to add things to my reminders, and they remind me to do so." }, void 0, !1, {
            fileName: "app/routes/uses.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/uses.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/uses.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/uses.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}
function ToolsSection({
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV26(Section, { ...props, children: /* @__PURE__ */ jsxDEV26("ul", { className: "space-y-16", children }, void 0, !1, {
    fileName: "app/routes/uses.tsx",
    lineNumber: 77,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/uses.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}
function Tool({
  title,
  href,
  children
}) {
  return /* @__PURE__ */ jsxDEV26(Card, { as: "li", children: [
    /* @__PURE__ */ jsxDEV26(Card.Title, { as: "h3", to: href, children: title }, void 0, !1, {
      fileName: "app/routes/uses.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV26(Card.Description, { children }, void 0, !1, {
      fileName: "app/routes/uses.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/uses.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "4f0b4747", entry: { module: "/build/entry.client-ORL3J3OD.js", imports: ["/build/_shared/chunk-FTZZIGUQ.js", "/build/_shared/chunk-IMHSX3JS.js", "/build/_shared/chunk-V6PX4BVM.js", "/build/_shared/chunk-WOT5BGAH.js", "/build/_shared/chunk-3MNNWU3K.js", "/build/_shared/chunk-SSQAA2G3.js", "/build/_shared/chunk-RHQIGQOS.js", "/build/_shared/chunk-CUPSZOF3.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-6IGV3UD2.js", imports: ["/build/_shared/chunk-EZ5USP5P.js", "/build/_shared/chunk-WIFQP2V6.js", "/build/_shared/chunk-7EFLXURJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-VG3R7SEY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth": { id: "routes/auth", parentId: "root", path: "auth", index: void 0, caseSensitive: void 0, module: "/build/routes/auth-DP6DP7CO.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-UCXA4WBS.js", imports: ["/build/_shared/chunk-6EXMSRDD.js", "/build/_shared/chunk-Y2436OVF.js", "/build/_shared/chunk-VQB4UMIF.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth.register": { id: "routes/auth.register", parentId: "root", path: "auth/register", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.register-M5J3KEPO.js", imports: ["/build/_shared/chunk-6EXMSRDD.js", "/build/_shared/chunk-Y2436OVF.js", "/build/_shared/chunk-VQB4UMIF.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-VYZAL2LI.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts": { id: "routes/posts", parentId: "root", path: "posts", index: void 0, caseSensitive: void 0, module: "/build/routes/posts-RND4Y5LP.js", imports: ["/build/_shared/chunk-ZO2RJZRF.js", "/build/_shared/chunk-5HOC2N2D.js", "/build/_shared/chunk-VQB4UMIF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts.$slug": { id: "routes/posts.$slug", parentId: "root", path: "posts/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.$slug-P7HLBRN7.js", imports: ["/build/_shared/chunk-5HOC2N2D.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts.$slug.edit": { id: "routes/posts.$slug.edit", parentId: "root", path: "posts/:slug/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.$slug.edit-5MHMM3GQ.js", imports: ["/build/_shared/chunk-4MJNAJRB.js", "/build/_shared/chunk-Y2436OVF.js", "/build/_shared/chunk-VQB4UMIF.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts.new": { id: "routes/posts.new", parentId: "root", path: "posts/new", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.new-WUH3WOMT.js", imports: ["/build/_shared/chunk-4MJNAJRB.js", "/build/_shared/chunk-Y2436OVF.js", "/build/_shared/chunk-VQB4UMIF.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/uses": { id: "routes/uses", parentId: "root", path: "uses", index: void 0, caseSensitive: void 0, module: "/build/routes/uses-EX7SI7V4.js", imports: ["/build/_shared/chunk-ZO2RJZRF.js", "/build/_shared/chunk-VQB4UMIF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: { runtime: "/build/_shared/chunk-WOT5BGAH.js", routes: { "app/routes/posts.$slug.edit.tsx": { loaderHash: `export async function loader({
  params,
  context: {
    auth,
    DB
  }
}: LoaderArgs) {
  if (!(await auth.check())) {
    return redirect("/auth/login");
  }
  const post = await DB.prepare("SELECT * FROM posts WHERE slug = ?").bind(params.slug).first<Post>();
  return json({
    post
  });
}` }, "app/routes/posts.$slug.tsx": { loaderHash: `export async function loader({
  params,
  context: {
    DB,
    auth
  }
}: LoaderArgs) {
  const {
    slug
  } = params;
  const post = await DB.prepare("SELECT * FROM posts WHERE slug = ?1 LIMIT 1").bind(slug).first<Post>();
  if (!post) {
    throw new Response("Not found", {
      status: 404
    });
  }
  return json({
    post: {
      ...post,
      content: await convertToHtml(post.content)
    },
    isLoggedIn: await auth.check()
  });
}` }, "app/routes/posts.tsx": { loaderHash: `export async function loader({
  context: {
    DB,
    auth
  }
}: LoaderArgs) {
  const isLoggedIn = await auth.check();
  const where = isLoggedIn ? "" : "WHERE status = 'published'";
  const posts = await DB.prepare(\`SELECT * FROM posts \${where} ORDER BY created_at DESC\`).all<Post>();
  invariant(posts.results, "Something went wrong when querying posts.");
  return json({
    posts: posts.results
  });
}` }, "app/routes/posts.new.tsx": { loaderHash: `export async function loader({
  request,
  context: {
    auth
  }
}: LoaderArgs) {
  if (!(await auth.check())) {
    return redirect("/auth/login");
  }
  return {};
}` }, "app/routes/index.tsx": { loaderHash: `export async function loader({
  context: {
    auth
  }
}: LoaderArgs) {
  const user = await auth.user();
  console.log({
    user
  });
  return {};
}` }, "app/routes/auth.tsx": { loaderHash: `export async function loader({
  context: {
    auth
  }
}: LoaderArgs) {
  if (await auth.check()) {
    return redirect("/");
  }
  return null;
}` }, "app/root.tsx": { loaderHash: `export async function loader({
  context: {
    auth
  }
}: LoaderArgs) {
  return json({
    isLoggedIn: await auth.check()
  });
}` } }, timestamp: 1677066731267 }, url: "/build/manifest-4F0B4747.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: { appServerPort: 3e3, rebuildPollIntervalMs: 500 }, unstable_postcss: !0, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, dev = { liveReloadPort: 3001 }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/posts.$slug.edit": {
    id: "routes/posts.$slug.edit",
    parentId: "root",
    path: "posts/:slug/edit",
    index: void 0,
    caseSensitive: void 0,
    module: posts_slug_edit_exports
  },
  "routes/auth.register": {
    id: "routes/auth.register",
    parentId: "root",
    path: "auth/register",
    index: void 0,
    caseSensitive: void 0,
    module: auth_register_exports
  },
  "routes/posts.$slug": {
    id: "routes/posts.$slug",
    parentId: "root",
    path: "posts/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: posts_slug_exports
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: auth_login_exports
  },
  "routes/posts.new": {
    id: "routes/posts.new",
    parentId: "root",
    path: "posts/new",
    index: void 0,
    caseSensitive: void 0,
    module: posts_new_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/auth": {
    id: "routes/auth",
    parentId: "root",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/uses": {
    id: "routes/uses",
    parentId: "root",
    path: "uses",
    index: void 0,
    caseSensitive: void 0,
    module: uses_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  dev,
  entry,
  future,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
