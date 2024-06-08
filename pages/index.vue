<template>
  <div ref="content">
    <div
      :class="[
        isShowLead ? 'block' : 'hidden',
        'lead-title bg-dark z-40 px-4 py-2 text-white shadow-lg fixed top-0 left-0 w-full  max-lg:!bottom-0 max-lg:!block max-lg:!top-auto  max-sm:!bg-white',
      ]"
    >
      <div class="flex items-center justify-between max-sm:hidden">
        <div class="w-[50%]">
          <div
            class="font-bold overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {{ data.title }}
          </div>
          <div class="text-sm">
            <span class="text-orange-400 inline-flex items-center"
              >4.6
              <span v-for="i in 4" class="i-material-symbols-star"></span>
              <span class="i-material-symbols-star-half"></span>
            </span>
            <button class="text-light mx-2 underline">
              ({{ data.num_reviews }} ratings)</button
            >{{ data.num_students }} students
          </div>
        </div>
        <div class="lg:hidden xl:hidden 2xl:hidden">
          <span class="text-xl mr-2 font-bold">$109.99 </span
          ><button class="bg-white text-dark py-2 px-4 font-bold">
            Buy now
          </button>
        </div>
      </div>
      <div class="max-sm:block hidden">
        <div class="flex items-center">
          <span class="text-xl mr-2 font-bold text-dark"> $109.99 </span>
          <button class="bg-primary text-white py-2 px-4 font-bold flex-1">
            Buy now
          </button>
        </div>
      </div>
    </div>
    <div ref="topContainer" class="bg-dark max-lg:!bg-white">
      <div
        class="min-w-[600px] sm:max-w-[600px] lg:max-w-[980px] xl:max-w-[1180px] mx-auto my-0 py-7 relative max-sm:p-4"
      >
        <div
          class="xl:max-w-[800px] lg:max-w-[600px] text-white max-lg:!text-normal"
        >
          <div class="mx-12 lg-m flex items-center text-sm mb-6">
            <NuxtLink to="/" class="text-light max-lg:text-primary"
              >Development</NuxtLink
            >
            <span class="i-material-symbols-chevron-right"></span>
            <NuxtLink to="/" class="text-light max-lg:text-primary"
              >Programming Languages
            </NuxtLink>
            <span class="i-material-symbols-chevron-right"></span>
            <NuxtLink to="/" class="text-light max-lg:text-primary"
              >Python</NuxtLink
            >
          </div>
          <button
            class="course-thumbnail relative w-full max-lg:block hidden my-4"
          >
            <img
              src="https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg"
              width="100%"
            />
            <div
              class="absolute inset-0 width-full border-white max-lg:border-primary border bg-gradient-to-t from-black/80 to-gray-300/0 opacity-85 flex items-center justify-center"
            >
              <div
                class="bg-white rounded-full w-16 h-16 flex items-center justify-center opacity-100"
              >
                <span class="i-mdi-play text-5xl"></span>
              </div>
              <div class="absolute bottom-4 mx-auto text-white font-bold">
                Preview this course
              </div>
            </div>
          </button>
          <div class="mx-12 lg-m mb-4">
            <div class="text-3xl font-bold mb-4">
              {{ data.title }}
            </div>
            <div class="mb-6">
              {{ data.subtitle }}
            </div>
            <div class="text-sm mb-4">
              <span class="text-orange-400 inline-flex items-center"
                >4.6
                <span v-for="i in 4" class="i-material-symbols-star"></span>
                <span class="i-material-symbols-star-half"></span>
              </span>
              <button class="text-light max-lg:text-primary mx-2 underline">
                ({{ data.num_reviews }} ratings)</button
              >{{ data.num_students }} students
            </div>
            <div class="text-sm mb-4">
              Created by
              <button
                v-for="author of data.authors"
                class="text-light max-lg:text-primary mx-2 underline"
              >
                {{ author }}
              </button>
            </div>
            <div class="text-sm mb-4 flex flex-wrap gap-y-3">
              <span class="mr-4 flex items-center"
                ><span
                  class="i-material-symbols-error-outline-rounded mr-1 text-xl"
                ></span>
                Last updated {{ data.last_update_date }}</span
              >
              <span class="mr-4 flex items-center"
                ><span class="i-material-symbols-language mr-1 text-xl"></span>
                {{ data.language }}</span
              >
              <span class="mr-4 flex items-center flex-wrap"
                ><span class="i-mdi-closed-caption-outline mr-1 text-xl"></span>
                {{ captionDisplay }}
                <span v-if="isShowMore">{{
                  data.captions.split(",").slice(2).join(",")
                }}</span>
              </span>
              <button
                @click="showMore"
                class="text-light max-lg:text-primary underline"
                v-if="
                  !isShowMore &&
                  data.captions &&
                  data.captions.split(',').length > 2
                "
              >
                {{ data.captions.split(",").length - 2 }} more
              </button>
            </div>
          </div>
          <div class="course-content max-lg:block hidden mt-8 relative">
            <div class="text-4xl font-bold mb-2 flex items-center">
              $22.99<span class="text-base font-normal"
                ><span class="line-through mx-1 text-gray-400">$109.99</span>
                79% off</span
              >
            </div>
            <div
              v-if="hoursLeft > 0"
              class="text-[#b32d0f] flex items-center text-sm mb-4"
            >
              <span class="i-mdi-alarm-clock text-lg mr-1"></span>
              <span
                ><strong>{{ hoursLeft }} hours</strong> left at this
                price!</span
              >
            </div>
            <div
              class="w-full h-12 bg-primary mt-2 mb-1 flex items-center justify-center text-white hover:bg-primary/90 cursor-pointer font-bold"
            >
              Add to cart
            </div>
            <div
              class="w-full h-12 border-primary border mt-2 mb-1 flex items-center justify-center hover:bg-light cursor-pointer font-bold"
            >
              Buy now
            </div>
            <p class="text-center text-xs my-4">30-Day Money-Back Guarantee</p>
            <div class="text-dark font-bold text-sm flex justify-between">
              <button class="underline decoration-primary underline-offset-4">
                Share
              </button>
              <button class="underline decoration-primary underline-offset-4">
                Gift this course
              </button>
              <button class="underline decoration-primary underline-offset-4">
                Apply Coupon
              </button>
            </div>
            <div
              class="border border-dashed p-2 my-4 flex items-center justify-between text-neutral-400 text-xs"
            >
              <div>
                <p><strong class="text-sm">OF52424</strong> is applied</p>
                <p>Udemy coupon</p>
              </div>
              <button class="i-mdi-close text-primary text-2xl"></button>
            </div>
            <div class="flex items-center border border-primary">
              <input
                type="text"
                class="flex-1 px-4 outline-none bg-transparent"
                autocomplete="off"
                placeholder="Enter Coupon"
              />
              <button class="w-20 py-2 bg-dark text-white hover:bg-dark/90">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div
          ref="sider"
          :class="[
            isFixedSider
              ? 'fixed z-[100] animate-[sider-fade-in_0.5s_ease-in-out_forwards]'
              : 'absolute',
            'top-6 w-[356px]  bg-white shadow-lg xl:ml-[800px] lg:ml-[600px] max-lg:hidden block z-30',
          ]"
        >
          <button
            v-show="!isFixedSider"
            class="course-thumbnail relative w-full"
          >
            <img
              src="https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg"
              width="100%"
            />
            <div
              class="absolute inset-0 width-full border-white border bg-gradient-to-t from-black/80 to-gray-300/0 opacity-85 flex items-center justify-center"
            >
              <div
                class="bg-white rounded-full w-16 h-16 flex items-center justify-center opacity-100"
              >
                <span class="i-mdi-play text-5xl"></span>
              </div>
              <div class="absolute bottom-4 mx-auto text-white font-bold">
                Preview this course
              </div>
            </div>
          </button>
          <div class="course-content p-6 relative">
            <div class="text-4xl font-bold mb-2 flex items-center">
              $22.99<span class="text-base font-normal"
                ><span class="line-through mx-1 text-gray-400">$109.99</span>
                79% off</span
              >
            </div>
            <div
              v-if="hoursLeft > 0"
              class="text-[#b32d0f] flex items-center text-sm mb-4"
            >
              <span class="i-mdi-alarm-clock text-lg mr-1"></span>
              <span
                ><strong>{{ hoursLeft }} hours</strong> left at this
                price!</span
              >
            </div>
            <div
              class="w-full h-12 bg-primary mt-2 mb-1 flex items-center justify-center text-white hover:bg-primary/90 cursor-pointer font-bold"
            >
              Add to cart
            </div>
            <div
              class="w-full h-12 border-primary border mt-2 mb-1 flex items-center justify-center hover:bg-light cursor-pointer font-bold"
            >
              Buy now
            </div>
            <p class="text-center text-xs my-4">30-Day Money-Back Guarantee</p>
            <p class="mt-4 mb-2 font-bold">This course includes:</p>
            <div
              class="flex items-center text-sm mb-3"
              v-for="include in includes"
            >
              <span :class="include.icon + ' text-base mr-3'"></span>
              <span>{{ include.title }}</span>
            </div>
            <div class="text-dark font-bold text-sm flex justify-between">
              <button class="underline decoration-primary underline-offset-4">
                Share
              </button>
              <button class="underline decoration-primary underline-offset-4">
                Gift this course
              </button>
              <button class="underline decoration-primary underline-offset-4">
                Apply Coupon
              </button>
            </div>
            <div
              class="border border-dashed p-2 my-4 flex items-center justify-between text-neutral-400 text-xs"
            >
              <div>
                <p><strong class="text-sm">OF52424</strong> is applied</p>
                <p>Udemy coupon</p>
              </div>
              <button class="i-mdi-close text-primary text-2xl"></button>
            </div>
            <div class="flex items-center border border-primary">
              <input
                type="text"
                class="flex-1 px-4 outline-none bg-transparent"
                autocomplete="off"
                placeholder="Enter Coupon"
              />
              <button class="w-20 py-2 bg-dark text-white hover:bg-dark/90">
                Apply
              </button>
            </div>
          </div>
          <div class="border-gray-200 px-6 py-6 border-t">
            <p class="text-xl font-bold">Training 5 or more people?</p>
            <p class="my-2 text-sm">
              Get your team access to 26,000+ top Udemy courses anytime,
              anywhere.
            </p>
            <button
              class="border border-primary p-4 w-full font-bold text-dark"
            >
              Try Udemy Business
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="min-w-[600px] sm:max-w-[600px] lg:max-w-[980px] xl:max-w-[1180px] mx-auto my-0 py-6 relative max-sm:p-4"
    >
      <div class="xl:max-w-[800px] lg:max-w-[600px]">
        <div
          :class="[
            isShowLearn ? '' : 'max-h-[300px]',
            'border p-4 mx-12 lg-m  overflow-hidden relative',
          ]"
        >
          <p class="text-2xl font-bold mb-4">What you'll learn</p>
          <div class="flex flex-wrap gap-2 text-sm justify-between flex-row">
            <div
              v-for="learn in learns"
              class="flex items-start w-[calc(50%-24px)]"
            >
              <span class="i-material-symbols-check mr-4 text-lg"></span>
              <span class="flex-1">{{ learn }}</span>
            </div>
          </div>
          <div
            :class="[
              isShowLearn
                ? 'bg-white py-4'
                : 'bg-gradient-to-b from-transparent from-10% to-white to-60% pt-16 pb-4 px-4 absolute bottom-0 left-0  w-full',
              ' ',
            ]"
          >
            <button
              class="text-primary font-bold text-sm flex items-center"
              @click="showLeanMore"
            >
              {{ isShowLearn ? "Show less" : "Show more" }}
              <span
                :class="[
                  isShowLearn
                    ? 'i-mdi-keyboard-arrow-up'
                    : 'i-mdi-keyboard-arrow-down',
                ]"
              ></span>
            </button>
          </div>
        </div>
        <div class="mx-12 lg-m mt-6 p-4 border">
          <p class="font-bold mb-1">
            Top companies offer this course to their employees
          </p>
          <div class="text-sm">
            This course was selected for our collection of top-rated courses
            trusted by businesses worldwide.
            <span
              class="text-primary decoration-primary underline underline-offset-4 cursor-pointer"
              >Learn more</span
            >
          </div>
          <div class="flex justify-between mt-4">
            <img v-for="logo in logos" :src="logo" loading="lazy" />
          </div>
        </div>
        <div class="mx-12 lg-m mt-6 p-4 bg-light flex text-sm">
          <div class="flex-3 pr-2">
            <p class="text-2xl mb-6 font-bold">Coding Exercises</p>
            <p>
              This course includes our updated coding exercises so you can
              practice your skills as you learn.
            </p>
            <div class="text-primary underline underline-offset-4 mt-8">
              See a dome
            </div>
          </div>
          <div class="flex-5">
            <img
              src="https://www.udemy.com/staticx/udemy/js/webpack/coding-exercises-demo-preview-desktop.2957bed27c3ae43a02824b61ad9cda03.png"
              loading="lazy"
            />
          </div>
        </div>
        <div class="mx-12 lg-m mt-6 text-sm flex flex-col">
          <div class="text-2xl font-bold mb-6">Course content</div>
          <div class="flex justify-between">
            <div>23 sections • 156 lectures • 22h 13m total length</div>
            <button @click="toggleAllSection" class="text-primary">
              {{
                isExpandAll ? "Collapse all sections" : "Expand all sections"
              }}
            </button>
          </div>
          <div class="border mt-2">
            <div v-for="section in sectionsData" class="*:last:border-none">
              <div
                @click="toggleSection(section)"
                class="flex py-4 px-6 justify-between items-center bg-light border-b cursor-pointer"
              >
                <div class="text-base font-bold flex items-center">
                  <span
                    :class="[
                      section.is_expand ? 'rotate-180' : '',
                      'text-xl mr-2 transition-transform i-mdi-keyboard-arrow-down',
                    ]"
                  ></span>
                  {{ section.title }}
                </div>
                <div>
                  {{ section.items.length }} lectures
                  {{ formatDuration(section.content_length_text) }}
                </div>
              </div>
              <div v-if="section.is_expand" class="px-6 py-4 border-b">
                <div v-for="item in section.items">
                  <div class="flex justify-between py-2">
                    <div class="flex items-center justify-start p-1">
                      <span
                        class="i-material-symbols-live-tv-outline text-lg"
                      ></span>
                      <span class="mx-2">{{ item.title }}</span>
                      <div
                        @click="toggleSection(item)"
                        class="w-6 h-6 rounded-full bg-light flex items-center justify-center cursor-pointer"
                      >
                        <span
                          :class="[
                            item.is_expand ? 'rotate-180' : '',
                            'transition-transform i-mdi-keyboard-arrow-down text-xl ',
                          ]"
                        ></span>
                      </div>
                    </div>
                    <div>{{ item.content_summary }}</div>
                  </div>
                  <div
                    v-if="item.is_expand"
                    class="px-6 text-[#6a6f73]"
                    v-html="item.description"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-12 lg-m mt-6 p-4 border">
          <div class="text-2xl mb-2 font-bold">Featured review</div>
          <div class="flex items-center">
            <img
              class="w-20 rounded-full mr-2"
              src="https://img-c.udemycdn.com/user/200_H/101610246_6b5d_3.jpg"
            />
            <div>
              <strong>Ken K.</strong>
              <div class="text-sm">9 courses</div>
              <div class="text-sm">2 reviews</div>
            </div>
          </div>
          <div class="flex items-center text-sm">
            <span class="text-orange-400 inline-flex items-center mr-2">
              <span
                v-for="i in 5"
                class="i-material-symbols-star text-xl"
              ></span
            ></span>
            3 years ago
          </div>
          <p class="text-sm py-3">
            Everything on this course is a goldmine except for the GUI since
            it's specific for Jupyter Notebooks and it's missing the video for
            GUI Events. Still it was a nice introduction to GUI. Don't let that
            disappoint you though. THIS IS A MUST HAVE COURSE. I have already
            recommended it to few people and always will. Do yourself a favor
            and do this course if you want to learn Python 3. Thank you so much
            for this course, Jose-sensei!!
          </p>
          <p class="text-xs">Was this review helpful?</p>
          <div class="flex items-center my-4">
            <button
              class="border border-primary rounded-full w-10 h-10 flex items-center justify-center"
            >
              <span class="i-mdi-thumbs-up-outline text-xl"></span>
            </button>

            <button
              class="border border-primary rounded-full w-10 h-10 flex items-center justify-center mx-2"
            >
              <span class="i-mdi-thumbs-down-outline text-xl"></span>
            </button>
            <button class="underline text-sm ml-2">Report</button>
          </div>
        </div>
        <div class="mx-12 lg-m mt-6 py-4 text-sm">
          <div class="text-2xl font-bold">Students also bought</div>
          <div class="flex flex-col">
            <div
              v-for="student in studentsDisplay"
              class="py-4 border-b flex items-start justify-between"
            >
              <div class="flex-1 flex">
                <img
                  class="w-16 h-16"
                  :src="student.image_100x100"
                  loading="lazy"
                />
                <div class="flex-[4] min-w-44 ml-2 relative">
                  <div class="text-base font-bold">
                    <div class="double-line">
                      {{ student.title }}
                    </div>
                  </div>
                  <div class="whitespace-nowrap absolute">
                    <span
                      v-if="student.bestseller_badge_content"
                      class="inline-block px-[4px] py-[2px] bg-amber-200 text-xs mr-2"
                      >{{ student.bestseller_badge_content.badge_text }}</span
                    >
                    <span
                      class="text-[#1e6055] font-bold after:content-['●'] after:text-[6px] after:m-1"
                      >{{ student.content_info }}
                    </span>
                    <span>Updated {{ student.last_update_date }}</span>
                  </div>
                </div>
                <div class="flex flex-[4] items-start justify-between ml-4">
                  <div class="flex items-center">
                    <strong>{{ student.rating.toFixed(1) }}</strong>
                    <span
                      class="i-material-symbols-star text-yellow-700 text-lg ml-1"
                    ></span>
                  </div>
                  <div class="flex items-center">
                    <span class="i-mdi-people text-lg mr-1"></span>
                    {{ student.num_subscribers.toLocaleString() }}
                  </div>
                  <span class="font-bold">$99.99</span>
                </div>
              </div>
              <div class="ml-2">
                <button
                  class="w-10 h-10 border rounded-full border-primary flex items-center justify-center hover:bg-light"
                >
                  <span class="i-mdi-heart-outline text-xl"></span>
                </button>
              </div>
            </div>
            <button
              @click="toggleSutdentShow"
              v-if="studentsAlsoBuy.length > 6"
              class="border border-primary w-full p-2 text-dark font-bold hover:bg-light"
            >
              {{ isStudentsMore ? "Show less" : "Show more" }}
            </button>
          </div>
        </div>
        <div class="mx-12 lg-m mt-6 py-4">
          <div class="text-2xl font-bold flex items-center mb-4">
            <span
              class="i-material-symbols-star text-yellow-700 text-2xl ml-1"
            ></span
            >4.6 course rating <span class="i-mdi-dot"></span> 508K ratings
          </div>
          <div class="flex flex-wrap">
            <div
              v-for="(rating, index) in ratingsData.slice(0, 4)"
              class="w-[calc(50%-16px)] p-2 border-t odd:mr-4 even:ml-4"
            >
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <div
                    class="w-10 h-10 bg-dark mr-3 text-white rounded-full flex items-center justify-center"
                  >
                    {{ rating.user.initials }}
                  </div>
                  <div class="flex items-start flex-col justify-center">
                    <strong>{{ rating.user.name }}</strong>
                    <div class="text-xs text-[#6a6f73] flex items-center">
                      <span
                        class="text-orange-400 inline-flex items-center mr-2"
                      >
                        <span
                          v-for="i in 4"
                          class="i-material-symbols-star text-sm"
                        ></span>
                        <span class="i-material-symbols-star-half"></span>
                      </span>
                      <span>{{
                        rating.created_formatted_with_time_since
                      }}</span>
                    </div>
                  </div>
                </div>
                <button class="i-mdi-dots-vertical text-2xl"></button>
              </div>
              <div
                :ref="setRefAction"
                class="mt-2 h-30 double-line !line-clamp-5"
              >
                {{ rating.content }}
              </div>
              <button
                v-if="ratingContentShow(index)"
                class="text-dark underline decoration-primary underline-offset-4 my-2 text-sm font-bold"
              >
                Show more
              </button>
              <div class="flex items-center my-4">
                <span class="text-xs">Helpful?</span>
                <button class="mx-4">
                  <span class="i-mdi-thumbs-up-outline text-xl"></span>
                </button>
                <button>
                  <span class="i-mdi-thumbs-down-outline text-xl"></span>
                </button>
              </div>
            </div>
          </div>
          <button
            class="border border-primary text-dark font-bold text-sm py-2 px-4"
          >
            Show all reviews
          </button>
        </div>
        <div class="mx-12 lg-m mt-6 py-4">
          <div class="text-2xl font-bold flex items-center mb-4">
            More Courses by
            <span class="text-primary ml-1"> Pierian Training</span>
          </div>
          <div class="flex">
            <div
              v-for="course in coursesData"
              class="flex flex-col text-xs w-[calc((100%-32px)/3)] first:mr-4 last:ml-4"
            >
              <img class="h-24" :src="course.image_240x135" loading="lazy" />
              <div class="text-base font-bold double-line">
                {{ course.title }}
              </div>
              <div class="text-[#6a6f73] text-xs">
                {{ course.visible_instructors[0].display_name }}
              </div>
              <div class="flex items-center my-1">
                <span class="font-bold mr-1">{{
                  course.rating.toFixed(1)
                }}</span>
                <span class="text-orange-400 inline-flex items-center mr-2">
                  <span
                    v-for="i in 4"
                    class="i-material-symbols-star text-sm"
                  ></span>
                  <span class="i-material-symbols-star-half"></span>
                </span>
                <span class="text-[#6a6f73] text-xs"
                  >({{ course.num_reviews }})</span
                >
              </div>
              <div class="text-[#6a6f73] text-xs">
                {{ course.content_info }} -
                {{ course.num_published_lectures }} -
                {{ course.instructional_level_simple }}
              </div>
              <div class="font-bold text-base my-2">{{ course.price }}</div>
            </div>
          </div>
          <button
            class="py-2 w-full border my-4 border-primary text-sm hover:bg-light font-bold"
          >
            Report abuse
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { sections, students_also_buy, ratings, courses } from "~/mock/data";

useHead({
  title: "Python Bootcamps: Learn Python Programming and Code Training | Udemy",
});

const isShowMore = ref<boolean>(false);
const isShowLead = ref<boolean>(true);
const isShowLearn = ref<boolean>(true);
const isFixedSider = ref<boolean>(false);
const isExpandAll = ref<boolean>(false);

const topContainer = ref<HTMLElement | null>(null);
const content = ref<HTMLElement | null>(null);
const sider = ref<HTMLElement | null>(null);
const showLeanMore = () => {
  isShowLearn.value = !isShowLearn.value;
};

const hoursLeft = 24 - new Date().getHours() - 1;
const data = ref<any>({
  title: "The Complete Python Bootcamp From Zero to Hero in Python",
  subtitle:
    " Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
  rating: 4.5869527,
  num_reviews: 507306,
  num_students: 1914890,
  authors: ["Jose Portilla", "Pierian Training"],
  last_update_date: "7/2023",
  language: "English",
  captions:
    "English [Auto], Arabic [Auto], Dutch [Auto], French [Auto], German [Auto], Indonesian [Auto], Italian [Auto], Japanese [Auto], Korean [Auto], Polish [Auto], Portuguese [Auto], Simplified Chinese [Auto], Spanish [Auto], Thai [Auto], Turkish [Auto], Vietnamese [Auto]",
});

const includes = ref<any>([
  {
    icon: "i-material-symbols-live-tv-outline",
    title: "22 hours on-demand video",
  },
  {
    icon: "i-material-symbols-code",
    title: "19 coding exercises",
  },
  {
    icon: "i-mdi-file-outline",
    title: "15 articles",
  },
  {
    icon: "i-mdi-cellphone",
    title: "Access on mobile and TV",
  },
  {
    icon: "i-mdi-infinity",
    title: "Full lifetime access",
  },
  {
    icon: "i-material-symbols-rewarded-ads-outline",
    title: "Certificate of completion",
  },
]);

const learns = ref<any>([
  "You will learn how to leverage the power of Python to solve tasks.",
  "You will learn how to leverage the power of Python to solve tasks.",
  "You will learn how to leverage the power of Python to solve tasks.",
  "You will learn how to leverage the power of Python to solve tasks.",
  "You will build games and programs that use Python libraries.",
  "You will build games and programs that use Python libraries.",
  "You will build games and programs that use Python libraries.",
  "You will build games and programs that use Python libraries.",
  "Learn advanced Python features, like the collections module and how to work with timestamps!",
  "Learn advanced Python features, like the collections module and how to work with timestamps!",
  "Learn advanced Python features, like the collections module and how to work with timestamps!",
  "Learn advanced Python features, like the collections module and how to work with timestamps!",
  "You will learn how to leverage the power of Python to solve tasks.",
  "You will learn how to leverage the power of Python to solve tasks.",
]);

const logos = ref<any>([
  "https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg",
  "https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg",
  "https://s.udemycdn.com/partner-logos/v4/box-dark.svg",
  "https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg",
  "https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg",
]);

const captionDisplay = computed(() => {
  let { captions } = data.value;
  let captions_arr = captions.split(",");
  return captions_arr && captions_arr.length > 2
    ? captions_arr.slice(0, 2).join(",")
    : captions;
});

//student also buy
const isStudentsMore = ref<boolean>(false);
const studentsAlsoBuy = ref(students_also_buy);

const studentsDisplay = computed(() => {
  if (studentsAlsoBuy.value.length > 6) {
    return isStudentsMore.value
      ? studentsAlsoBuy.value
      : studentsAlsoBuy.value.slice(0, 7);
  } else {
    return studentsAlsoBuy.value;
  }
});

const toggleSutdentShow = () => {
  isStudentsMore.value = !isStudentsMore.value;
};

//what you'll learn
const showMore = () => {
  isShowMore.value = !isShowMore.value;
};

//sections
const sectionsData = ref(sections);

const toggleSection = (section: any) => {
  section.is_expand = !section.is_expand;
};

const toggleAllSection = () => {
  isExpandAll.value = !isExpandAll.value;
  for (let section of sectionsData.value) {
    section.is_expand = isExpandAll.value;
  }
};

const formatDuration = computed(() => (duration: any) => {
  let dur = duration.split(":");
  if (dur.length == 2) {
    return `${parseInt(dur[0])}min`;
  } else if (dur.length == 3) {
    return `${parseInt(dur[0])}hr ${parseInt(dur[1])}min`;
  } else {
    return "";
  }
});

// rating
const ratingsData = ref(ratings);

const refList = ref<Array<any>>([]);
const setRefAction = (el: any) => {
  refList.value.push(el);
};

const ratingContentShow = computed(() => (index: number) => {
  if (refList.value[index]) {
    return (
      refList.value[index].scrollHeight > refList.value[index].clientHeight
    );
  } else {
    return false;
  }
});

//courses
const coursesData = ref(courses);

onMounted(() => {
  const viewHeight =
    window.innerHeight || document.documentElement.clientHeight;
  window.onscroll = useDebounce(() => {
    let bottom = topContainer.value?.getBoundingClientRect().bottom;
    let contentBottom = content.value?.getBoundingClientRect().bottom;
    if (bottom && bottom <= 0) {
      isFixedSider.value = true;
    } else {
      isFixedSider.value = false;
    }
    if (contentBottom && contentBottom <= viewHeight) {
      isFixedSider.value = false;
    }
  }, 50);
});
</script>

<style>
@keyframes sider-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.double-line {
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.rating-content {
  --more: false;
  animation: check 1s;
  overflow: hidden;
  animation-timeline: scroll(self);
}

@keyframes more {
  from,
  to {
    --more: true;
    color: red;
  }
}

.lg-m {
  @apply max-lg:mx-0;
}
</style>
