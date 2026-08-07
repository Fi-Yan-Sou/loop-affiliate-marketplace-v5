<script setup>
import { computed } from 'vue'

const props = defineProps({
  selectedSize: { type: Object, default: null } // { name, code, sku, ebayAffiliateUrl, depopAffiliateUrl }
})

const isEnabled = computed(() => !!props.selectedSize)

const openEbay = () => {
  if (!props.selectedSize) return
  window.open(props.selectedSize.ebayAffiliateUrl, '_blank', 'noopener')
}

const openDepop = () => {
  if (!props.selectedSize) return
  window.open(props.selectedSize.depopAffiliateUrl, '_blank', 'noopener')
}
</script>

<template>
  <div class="buy-buttons">
    <button
      type="button"
      class="buy-buttons__btn buy-buttons__btn--ebay"
      :disabled="!isEnabled"
      @click="openEbay"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9l9-6 9 6-9 6-9-6z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round" />
        <path d="M3 15l9 6 9-6" stroke="#fff" stroke-width="1.8" stroke-linejoin="round" />
      </svg>
      Buy on eBay
    </button>

    <button
      type="button"
      class="buy-buttons__btn buy-buttons__btn--depop"
      :disabled="!isEnabled"
      @click="openDepop"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 3h9l6 6v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round" />
        <path d="M15 3v6h6" stroke="#fff" stroke-width="1.8" stroke-linejoin="round" />
      </svg>
      Buy on Depop
    </button>

    <p v-if="!isEnabled" class="buy-buttons__hint">Select a color and size to continue.</p>
  </div>
</template>

<style scoped>
.buy-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.buy-buttons__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 54px;
  border-radius: var(--radius-button);
  color: #fff;
  font-size: 1rem;
  font-weight: var(--fw-semibold);
  transition: transform var(--transition-base), background-color var(--transition-base), opacity var(--transition-base);
}

.buy-buttons__btn:not(:disabled):hover {
  transform: scale(1.02);
}

.buy-buttons__btn:not(:disabled):active {
  transform: scale(0.99);
}

.buy-buttons__btn--ebay {
  background-color: var(--color-primary);
}

.buy-buttons__btn--ebay:not(:disabled):hover {
  background-color: var(--color-primary-dark);
}

.buy-buttons__btn--depop {
  background-color: var(--color-secondary);
}

.buy-buttons__btn--depop:not(:disabled):hover {
  background-color: var(--color-secondary-dark);
}

.buy-buttons__btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.buy-buttons__hint {
  font-size: var(--fs-small);
  color: var(--color-text-secondary);
}

@media (max-width: 480px) {
  .buy-buttons__btn {
    width: 100%;
  }
}
</style>
