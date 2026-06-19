
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const AboutRafael: typeof import("../app/components/AboutRafael.vue")['default']
export const AppFooter: typeof import("../app/components/AppFooter.vue")['default']
export const AppNavbar: typeof import("../app/components/AppNavbar.vue")['default']
export const ArchitectProfile: typeof import("../app/components/ArchitectProfile.vue")['default']
export const BentoServices: typeof import("../app/components/BentoServices.vue")['default']
export const ConversionWall: typeof import("../app/components/ConversionWall.vue")['default']
export const CreditCardSection: typeof import("../app/components/CreditCardSection.vue")['default']
export const CtaBannerSection: typeof import("../app/components/CtaBannerSection.vue")['default']
export const DashboardMockup: typeof import("../app/components/DashboardMockup.vue")['default']
export const FaqSection: typeof import("../app/components/FaqSection.vue")['default']
export const FeaturesGridSection: typeof import("../app/components/FeaturesGridSection.vue")['default']
export const Hero: typeof import("../app/components/Hero.vue")['default']
export const HeroHook: typeof import("../app/components/HeroHook.vue")['default']
export const HeroSection: typeof import("../app/components/HeroSection.vue")['default']
export const HeroZoom: typeof import("../app/components/HeroZoom.vue")['default']
export const ParticlesBackground: typeof import("../app/components/ParticlesBackground.vue")['default']
export const PressLogosSection: typeof import("../app/components/PressLogosSection.vue")['default']
export const ProblemGraph: typeof import("../app/components/ProblemGraph.vue")['default']
export const ProblemSection: typeof import("../app/components/ProblemSection.vue")['default']
export const ProductsSection: typeof import("../app/components/ProductsSection.vue")['default']
export const SavingsCalculator: typeof import("../app/components/SavingsCalculator.vue")['default']
export const ServicesBento: typeof import("../app/components/ServicesBento.vue")['default']
export const StepsSection: typeof import("../app/components/StepsSection.vue")['default']
export const StickyFeatures: typeof import("../app/components/StickyFeatures.vue")['default']
export const SuccessStories: typeof import("../app/components/SuccessStories.vue")['default']
export const TestimonialSection: typeof import("../app/components/TestimonialSection.vue")['default']
export const TestimonialsLeadMagnet: typeof import("../app/components/TestimonialsLeadMagnet.vue")['default']
export const TreasurySection: typeof import("../app/components/TreasurySection.vue")['default']
export const UVRScanner: typeof import("../app/components/UVRScanner.vue")['default']
export const MoleculesHeroContent: typeof import("../app/components/molecules/HeroContent.vue")['default']
export const MoleculesHeroHookCounter: typeof import("../app/components/molecules/HeroHookCounter.vue")['default']
export const UiBaseButton: typeof import("../app/components/ui/BaseButton.vue")['default']
export const UiTikTokEmbed: typeof import("../app/components/ui/TikTokEmbed.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAboutRafael: LazyComponent<typeof import("../app/components/AboutRafael.vue")['default']>
export const LazyAppFooter: LazyComponent<typeof import("../app/components/AppFooter.vue")['default']>
export const LazyAppNavbar: LazyComponent<typeof import("../app/components/AppNavbar.vue")['default']>
export const LazyArchitectProfile: LazyComponent<typeof import("../app/components/ArchitectProfile.vue")['default']>
export const LazyBentoServices: LazyComponent<typeof import("../app/components/BentoServices.vue")['default']>
export const LazyConversionWall: LazyComponent<typeof import("../app/components/ConversionWall.vue")['default']>
export const LazyCreditCardSection: LazyComponent<typeof import("../app/components/CreditCardSection.vue")['default']>
export const LazyCtaBannerSection: LazyComponent<typeof import("../app/components/CtaBannerSection.vue")['default']>
export const LazyDashboardMockup: LazyComponent<typeof import("../app/components/DashboardMockup.vue")['default']>
export const LazyFaqSection: LazyComponent<typeof import("../app/components/FaqSection.vue")['default']>
export const LazyFeaturesGridSection: LazyComponent<typeof import("../app/components/FeaturesGridSection.vue")['default']>
export const LazyHero: LazyComponent<typeof import("../app/components/Hero.vue")['default']>
export const LazyHeroHook: LazyComponent<typeof import("../app/components/HeroHook.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../app/components/HeroSection.vue")['default']>
export const LazyHeroZoom: LazyComponent<typeof import("../app/components/HeroZoom.vue")['default']>
export const LazyParticlesBackground: LazyComponent<typeof import("../app/components/ParticlesBackground.vue")['default']>
export const LazyPressLogosSection: LazyComponent<typeof import("../app/components/PressLogosSection.vue")['default']>
export const LazyProblemGraph: LazyComponent<typeof import("../app/components/ProblemGraph.vue")['default']>
export const LazyProblemSection: LazyComponent<typeof import("../app/components/ProblemSection.vue")['default']>
export const LazyProductsSection: LazyComponent<typeof import("../app/components/ProductsSection.vue")['default']>
export const LazySavingsCalculator: LazyComponent<typeof import("../app/components/SavingsCalculator.vue")['default']>
export const LazyServicesBento: LazyComponent<typeof import("../app/components/ServicesBento.vue")['default']>
export const LazyStepsSection: LazyComponent<typeof import("../app/components/StepsSection.vue")['default']>
export const LazyStickyFeatures: LazyComponent<typeof import("../app/components/StickyFeatures.vue")['default']>
export const LazySuccessStories: LazyComponent<typeof import("../app/components/SuccessStories.vue")['default']>
export const LazyTestimonialSection: LazyComponent<typeof import("../app/components/TestimonialSection.vue")['default']>
export const LazyTestimonialsLeadMagnet: LazyComponent<typeof import("../app/components/TestimonialsLeadMagnet.vue")['default']>
export const LazyTreasurySection: LazyComponent<typeof import("../app/components/TreasurySection.vue")['default']>
export const LazyUVRScanner: LazyComponent<typeof import("../app/components/UVRScanner.vue")['default']>
export const LazyMoleculesHeroContent: LazyComponent<typeof import("../app/components/molecules/HeroContent.vue")['default']>
export const LazyMoleculesHeroHookCounter: LazyComponent<typeof import("../app/components/molecules/HeroHookCounter.vue")['default']>
export const LazyUiBaseButton: LazyComponent<typeof import("../app/components/ui/BaseButton.vue")['default']>
export const LazyUiTikTokEmbed: LazyComponent<typeof import("../app/components/ui/TikTokEmbed.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
