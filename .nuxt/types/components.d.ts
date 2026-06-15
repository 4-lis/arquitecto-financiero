
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

interface _GlobalComponents {
  AboutRafael: typeof import("../../app/components/AboutRafael.vue")['default']
  AppFooter: typeof import("../../app/components/AppFooter.vue")['default']
  AppNavbar: typeof import("../../app/components/AppNavbar.vue")['default']
  ArchitectProfile: typeof import("../../app/components/ArchitectProfile.vue")['default']
  BentoServices: typeof import("../../app/components/BentoServices.vue")['default']
  ConversionWall: typeof import("../../app/components/ConversionWall.vue")['default']
  CreditCardSection: typeof import("../../app/components/CreditCardSection.vue")['default']
  CtaBannerSection: typeof import("../../app/components/CtaBannerSection.vue")['default']
  DashboardMockup: typeof import("../../app/components/DashboardMockup.vue")['default']
  FaqSection: typeof import("../../app/components/FaqSection.vue")['default']
  FeaturesGridSection: typeof import("../../app/components/FeaturesGridSection.vue")['default']
  Hero: typeof import("../../app/components/Hero.vue")['default']
  HeroHook: typeof import("../../app/components/HeroHook.vue")['default']
  HeroSection: typeof import("../../app/components/HeroSection.vue")['default']
  HeroZoom: typeof import("../../app/components/HeroZoom.vue")['default']
  PressLogosSection: typeof import("../../app/components/PressLogosSection.vue")['default']
  ProblemGraph: typeof import("../../app/components/ProblemGraph.vue")['default']
  ProductsSection: typeof import("../../app/components/ProductsSection.vue")['default']
  SavingsCalculator: typeof import("../../app/components/SavingsCalculator.vue")['default']
  ServicesBento: typeof import("../../app/components/ServicesBento.vue")['default']
  StepsSection: typeof import("../../app/components/StepsSection.vue")['default']
  StickyFeatures: typeof import("../../app/components/StickyFeatures.vue")['default']
  SuccessStories: typeof import("../../app/components/SuccessStories.vue")['default']
  TestimonialSection: typeof import("../../app/components/TestimonialSection.vue")['default']
  TestimonialsLeadMagnet: typeof import("../../app/components/TestimonialsLeadMagnet.vue")['default']
  TreasurySection: typeof import("../../app/components/TreasurySection.vue")['default']
  UVRScanner: typeof import("../../app/components/UVRScanner.vue")['default']
  MoleculesHeroContent: typeof import("../../app/components/molecules/HeroContent.vue")['default']
  MoleculesHeroHookCounter: typeof import("../../app/components/molecules/HeroHookCounter.vue")['default']
  UiBaseButton: typeof import("../../app/components/ui/BaseButton.vue")['default']
  UiTikTokEmbed: typeof import("../../app/components/ui/TikTokEmbed.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAboutRafael: LazyComponent<typeof import("../../app/components/AboutRafael.vue")['default']>
  LazyAppFooter: LazyComponent<typeof import("../../app/components/AppFooter.vue")['default']>
  LazyAppNavbar: LazyComponent<typeof import("../../app/components/AppNavbar.vue")['default']>
  LazyArchitectProfile: LazyComponent<typeof import("../../app/components/ArchitectProfile.vue")['default']>
  LazyBentoServices: LazyComponent<typeof import("../../app/components/BentoServices.vue")['default']>
  LazyConversionWall: LazyComponent<typeof import("../../app/components/ConversionWall.vue")['default']>
  LazyCreditCardSection: LazyComponent<typeof import("../../app/components/CreditCardSection.vue")['default']>
  LazyCtaBannerSection: LazyComponent<typeof import("../../app/components/CtaBannerSection.vue")['default']>
  LazyDashboardMockup: LazyComponent<typeof import("../../app/components/DashboardMockup.vue")['default']>
  LazyFaqSection: LazyComponent<typeof import("../../app/components/FaqSection.vue")['default']>
  LazyFeaturesGridSection: LazyComponent<typeof import("../../app/components/FeaturesGridSection.vue")['default']>
  LazyHero: LazyComponent<typeof import("../../app/components/Hero.vue")['default']>
  LazyHeroHook: LazyComponent<typeof import("../../app/components/HeroHook.vue")['default']>
  LazyHeroSection: LazyComponent<typeof import("../../app/components/HeroSection.vue")['default']>
  LazyHeroZoom: LazyComponent<typeof import("../../app/components/HeroZoom.vue")['default']>
  LazyPressLogosSection: LazyComponent<typeof import("../../app/components/PressLogosSection.vue")['default']>
  LazyProblemGraph: LazyComponent<typeof import("../../app/components/ProblemGraph.vue")['default']>
  LazyProductsSection: LazyComponent<typeof import("../../app/components/ProductsSection.vue")['default']>
  LazySavingsCalculator: LazyComponent<typeof import("../../app/components/SavingsCalculator.vue")['default']>
  LazyServicesBento: LazyComponent<typeof import("../../app/components/ServicesBento.vue")['default']>
  LazyStepsSection: LazyComponent<typeof import("../../app/components/StepsSection.vue")['default']>
  LazyStickyFeatures: LazyComponent<typeof import("../../app/components/StickyFeatures.vue")['default']>
  LazySuccessStories: LazyComponent<typeof import("../../app/components/SuccessStories.vue")['default']>
  LazyTestimonialSection: LazyComponent<typeof import("../../app/components/TestimonialSection.vue")['default']>
  LazyTestimonialsLeadMagnet: LazyComponent<typeof import("../../app/components/TestimonialsLeadMagnet.vue")['default']>
  LazyTreasurySection: LazyComponent<typeof import("../../app/components/TreasurySection.vue")['default']>
  LazyUVRScanner: LazyComponent<typeof import("../../app/components/UVRScanner.vue")['default']>
  LazyMoleculesHeroContent: LazyComponent<typeof import("../../app/components/molecules/HeroContent.vue")['default']>
  LazyMoleculesHeroHookCounter: LazyComponent<typeof import("../../app/components/molecules/HeroHookCounter.vue")['default']>
  LazyUiBaseButton: LazyComponent<typeof import("../../app/components/ui/BaseButton.vue")['default']>
  LazyUiTikTokEmbed: LazyComponent<typeof import("../../app/components/ui/TikTokEmbed.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.5_@parcel+watcher@2.5.6_@types+node@25.8.0_@vue+compiler-sfc@3.5.34_cac@6.7.14_db0@_iawzr66tevpkdrsgvqwi6bfmqy/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
