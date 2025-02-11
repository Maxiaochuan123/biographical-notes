import { defineCollection, z } from 'astro:content';

// 基本信息模式
const basicSchema = z.object({
  name: z.string(),
  title: z.string(),
  email: z.string().email(),
  phone: z.string(),
  location: z.string(),
  avatar: z.string().optional(),
  about: z.string(),
  profiles: z.array(z.object({
    network: z.string(),
    url: z.string().url(),
    username: z.string()
  }))
});

// 工作经验模式
const workSchema = z.object({
  company: z.string(),
  position: z.string(),
  website: z.string().url().optional(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  summary: z.string(),
  highlights: z.array(z.string())
});

// 项目经验模式
const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  url: z.string().url().optional(),
  highlights: z.array(z.string()),
  techStack: z.array(z.string()),
  role: z.string(),
  teamSize: z.number().optional()
});

// 技能模式
const skillSchema = z.object({
  category: z.string(),
  skills: z.array(z.object({
    name: z.string(),
    level: z.enum(['expert', 'advanced', 'intermediate', 'basic']),
    keywords: z.array(z.string())
  }))
});

// 教育经历模式
const educationSchema = z.object({
  institution: z.string(),
  area: z.string(),
  studyType: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  score: z.string().optional(),
  courses: z.array(z.string()).optional()
});

// 定义简历集合
export const collections = {
  'resume': defineCollection({
    schema: z.object({
      basics: basicSchema,
      work: z.array(workSchema),
      projects: z.array(projectSchema),
      skills: z.array(skillSchema),
      education: z.array(educationSchema),
      languages: z.array(z.object({
        language: z.string(),
        fluency: z.string()
      })),
      interests: z.array(z.object({
        name: z.string(),
        keywords: z.array(z.string())
      })).optional()
    })
  })
}; 