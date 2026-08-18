<script setup>
import CaseStudyGallery from './CaseStudyGallery.vue'

const galleryImages = [
  'https://picsum.photos/seed/customer-unboxing-1/900/1125',
  'https://picsum.photos/seed/customer-delivery-2/900/1125',
  'https://picsum.photos/seed/customer-smiling-3/900/1125',
  'https://picsum.photos/seed/customer-package-4/900/1125'
]
</script>

<template>
  <section class="section case-studies" aria-labelledby="case-studies-heading">
    <div class="container case-studies__grid">
      <div class="case-studies__text-col">
        <span class="case-studies__label">Case Studies</span>
        <h2 id="case-studies-heading" class="case-studies__title">
          Last 24h Orders
        </h2>
        <p class="case-studies__paragraph">
          We love seeing our customers receive their orders safely. Every product showcased here comes from
          trusted sellers on eBay and Depop, ensuring a reliable shopping experience.
        </p>
      </div>

      <div class="case-studies__gallery-col">
        <CaseStudyGallery :images="galleryImages" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.case-studies__grid {
  display: grid;
  grid-template-columns: 1fr minmax(0, 460px);
  gap: var(--space-8);
  align-items: center;
}

.case-studies__label {
  display: inline-block;
  font-size: var(--fs-small);
  font-weight: var(--fw-semibold);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-2);
}

.case-studies__title {
  font-size: 2.25rem;
  font-weight: var(--fw-extrabold);
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin-bottom: var(--space-3);
}

.case-studies__paragraph {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 480px;
}

@media (max-width: 1024px) {
  .case-studies__grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .case-studies__gallery-col {
    max-width: 420px;
    margin: 0 auto;
    width: 100%;
  }

  .case-studies__text-col {
    text-align: center;
  }

  .case-studies__paragraph {
    margin: 0 auto;
  }
}
</style>
