export const JOB_SOURCE: Kele.Job[] = [
  {
    id: 0,
    title: "title 1",
    tags: ["tag2", "tag3"],
    bgMainImage: "/images/jobs/job1.png",
    bgHoverImage:
      "https://assets.dunked.com/assets/prod/120709/600x600-2_p1hkgv2jfv1o7q1h351pqf1ro97vu3.jpg",
  },
  {
    id: 1,
    title: "title 2",
    tags: ["tag1", "tag3"],
    bgMainImage: "/images/jobs/job1.png",
    bgHoverImage:
      "https://assets.dunked.com/assets/prod/120709/600x600-2_p1hkgv2jfv1o7q1h351pqf1ro97vu3.jpg",
  },
  {
    id: 2,
    title: "title 3",
    tags: ["tag1", "tag2", "tag3"],
    bgMainImage: "/images/jobs/job1.png",
    bgHoverImage:
      "https://assets.dunked.com/assets/prod/120709/600x600-2_p1hkgv2jfv1o7q1h351pqf1ro97vu3.jpg",
  },
  {
    id: 3,
    title: "title 4",
    tags: ["tag1"],
    bgMainImage: "/images/jobs/job1.png",
    bgHoverImage:
      "https://assets.dunked.com/assets/prod/120709/600x600-2_p1hkgv2jfv1o7q1h351pqf1ro97vu3.jpg",
  },
  {
    id: 4,
    title: "title 5",
    tags: ["tag2"],
    bgMainImage: "/images/jobs/job1.png",
    bgHoverImage:
      "https://assets.dunked.com/assets/prod/120709/600x600-2_p1hkgv2jfv1o7q1h351pqf1ro97vu3.jpg",
  },
];

export const getJobsIDs = (): number[] => {
  return JOB_SOURCE.map((j) => j.id);
};
