<script setup>
// 1. v-model.range 選取日期範圍
// 預設選取 2024 年 12 月 24 日至 2024 年 12 月 25 日之間
const date = ref({
  start: new Date(2024, 11, 24),
  end: new Date(2024, 11, 25),
});
/* ====================== */

const isoDate = ref({
  start: new Date(2024, 11, 24).toISOString().split("T")[0],
  end: new Date(2024, 11, 25).toISOString().split("T")[0],
});
/* ====================== */
// 3. 設定日期解析的格式
const masks = ref({
  title: "西元 YYYY 年 MM 月",
  modelValue: "YYYY-MM-DD",
});
/* ====================== */
// 4. 設定日曆起始天數

// 日曆從週一開始顯示
const weekNumber = ref(2);

/* ====================== */
// 5 . 限制日期可選取範圍

// 最早可選取的日期 ( 2024 年 12 月 5 日 )
const minDate = ref(new Date(2024, 11, 5));

// 最晚可選取的日期 ( 2024 年 12 月  29 日 )
const maxDate = ref(new Date(2024, 11, 29));

/* ====================== */

// 6. 多欄 ( Columns ) 或是多列 ( Rows ) 日曆

import { useScreens } from "vue-screen-utils";

const { mapCurrent } = useScreens({
  md: "768px", // 等同於 (min-width: 768px)
  lg: "1200px", // 等同於 (min-width: 1024px)
});

// 767px 以下 1 欄，768px 以上 2 欄，1200px 以上 3 欄
const columns = mapCurrent({ md: 2, lg: 3 }, 1);

// 767px 以下 1 列，768px 以上 2 列，1200px 以上 2 列
const rows = mapCurrent({ md: 2, lg: 2 }, 1);

/* ====================== */

// true  -> 加入 expanded 屬性
// false -> 不加入 expanded 屬性
const isExpended = ref(true);
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h1 class="mb-5 text-center">VDatePicker 元件的設定</h1>

        <div class="mb-3">
          <h2>1. v-model.range 選取日期範圍</h2>
          <pre>
              {{ date }}
          </pre>
          <VDatePicker v-model.range="date" />
        </div>
        <hr />
        <div class="mb-3 overflow-auto">
          <h2>2. color props 設定日期選取的顏色</h2>
          <div class="d-flex gap-3 pt-5">
            <div>
              <h3>使用預設顏色</h3>
              <VDatePicker v-model.range="date" color="red" />
            </div>
            <div class="date-picker">
              <h3>使用自訂顏色 ( sky-blue )</h3>
              <VDatePicker v-model.range="date" color="sky-blue" />
            </div>
          </div>
        </div>
        <hr />
        <div class="my-3">
          <h2>3. 設定日期解析的格式</h2>
          <pre>
              {{ isoDate }}
          </pre>
          <VDatePicker v-model.range.string="isoDate" :masks="masks" />
        </div>

        <hr />
        <div class="mb-3">
          <h2>4. 設定日曆的起始天數</h2>
          <p>日曆從週一開始顯示</p>
          <VDatePicker v-model.range="date" :first-day-of-week="weekNumber" />
        </div>
        <hr />
        <div class="mb-3">
          <h2>5. 限制日期可選取範圍</h2>
          <pre>
const minDate = ref(new Date(2024, 11, 5));
const maxDate = ref(new Date(2024, 11, 29));
          </pre>
          <VDatePicker
            v-model.range="date"
            :min-date="minDate"
            :max-date="maxDate"
          />
        </div>
        <hr />
        <div class="mb-3">
          <h2>6. 多欄 ( Columns ) 或是多列 ( Rows ) 日曆</h2>
          <div class="mt-5 overflow-auto">
            <h3>:columns 與 :rows 基礎用法</h3>
            <!-- VDatePicker與父層元素等寬。 -->
            <!-- 使用屬性綁定 ( v-bind ) 的 :columns 與 :row 屬性分別傳入數字 3 和數字 2 ，建立了 3 欄 2列 的佈局  -->
            <VDatePicker v-model.range="date" :columns="3" :rows="2" />
          </div>
          <div class="mt-5 overflow-auto">
            <h3>響應式斷點用法</h3>
            <pre>
範例: 
- 767px 以下的螢幕尺寸呈現 1 欄與 1 列
- 768px ~ 1199px 之間的螢幕尺寸呈現 2 欄與 2 列
- 1200px 以上的螢幕尺寸呈現 3 欄與 2 列
            </pre>
            <ClientOnly>
              <p>欄數:{{ columns }} 列數:{{ rows }}</p>
              <VDatePicker
                v-model.range="date"
                :columns="columns"
                :rows="rows"
              />
            </ClientOnly>
          </div>
        </div>
        <hr />
        <div class="mb-3">
          <h2>7. 與父層容器等寬</h2>
          <div class="mt-5">
            <h3>加入 expanded 屬性</h3>
            <!-- VDatePicker與父層元素等寬。 -->

            <VDatePicker v-model.range="date" expanded />
          </div>
          <div class="mt-5">
            <h3>
              也可以透過 :expanded 屬性綁定 ( v-bind )，傳入布林值 true 或 false
              決定是否要加入 expanded 屬性
            </h3>
            <pre>
  // true  -> 加入 expanded 屬性
  // false -> 不加入 expanded 屬性
  const isExpended = ref(true);
           </pre
            >
            <!--因為 :expanded 傳入的 isExpended 資料的值為 true，所以 VDatePicker 與父層元素等寬 -->
            <VDatePicker v-model.range="date" :expanded="isExpended" />
          </div>
        </div>
        <hr />
        <div class="mb-3">
          <h2>8. 調整日曆標題的對齊。預設會置中 ，可調整為靠左、靠右對齊</h2>
          <div class="d-flex gap-3 pt-5 overflow-auto">
            <div>
              <h3>預設為置中 ( center )</h3>
              <VDatePicker v-model.range="date" />
            </div>
            <div class="date-picker">
              <h3>調整為靠左對齊 ( left )</h3>
              <VDatePicker v-model.range="date" title-position="left" />
            </div>
            <div class="date-picker">
              <h3>調整為靠右對齊 ( right )</h3>
              <VDatePicker v-model.range="date" title-position="right" />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<style scoped>
.date-picker :deep(.vc-sky-blue) {
  --vc-accent-50: #f0f9ff;
  --vc-accent-100: #e0f2fe;
  --vc-accent-200: #bae6fd;
  --vc-accent-300: #7dd3fc;
  --vc-accent-400: #38bdf8;
  --vc-accent-500: #0ea5e9;
  --vc-accent-600: #0284c7;
  --vc-accent-700: #0369a1;
  --vc-accent-800: #075985;
  --vc-accent-900: #0c4a6e;
}
</style>
