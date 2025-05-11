// default open-next.config.ts file created by @opennextjs/cloudflare
let defineCloudflareConfig;

if (process.env.CLOUDFLARE) {
  defineCloudflareConfig = (await import("@opennextjs/cloudflare")).defineCloudflareConfig;
}

export default defineCloudflareConfig({
  incrementalCache: undefined, // Use undefined if you are not using R2 for caching
});
