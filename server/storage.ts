import {
  type Inquiry,
  type InsertInquiry,
  type Project,
  type InsertProject,
  type Testimonial,
  type InsertTestimonial,
} from "@shared/schema";

export interface IStorage {
  // Inquiries
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
  
  // Projects
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private inquiries: Map<number, Inquiry>;
  private projects: Map<number, Project>;
  private testimonials: Map<number, Testimonial>;
  private currentIds: { [key: string]: number };

  constructor() {
    this.inquiries = new Map();
    this.projects = new Map();
    this.testimonials = new Map();
    this.currentIds = {
      inquiries: 1,
      projects: 1,
      testimonials: 1,
    };

    // Add some sample projects
    this.initializeSampleData();
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentIds.inquiries++;
    const inquiry: Inquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date(),
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values());
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(p => p.featured);
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(
      p => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentIds.projects++;
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentIds.testimonials++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  private initializeSampleData() {
    // Sample projects
    const projects: InsertProject[] = [
      {
        title: "E-commerce Platform",
        description: "A full-featured online store with inventory management",
        category: "Web Development",
        imageUrl: "https://images.unsplash.com/photo-1486475554424-2fa50cd59f18",
        featured: true,
      },
      {
        title: "Cloud Migration",
        description: "Enterprise-scale cloud infrastructure migration",
        category: "Cloud Services",
        imageUrl: "https://images.unsplash.com/photo-1496450681664-3df85efbd29f",
        featured: true,
      },
      {
        title: "Marketing Dashboard",
        description: "Analytics and reporting platform for digital marketing",
        category: "Digital Marketing",
        imageUrl: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2",
        featured: true,
      },
    ];

    projects.forEach(p => this.createProject(p));

    // Sample testimonials
    const testimonials: InsertTestimonial[] = [
      {
        name: "John Smith",
        role: "CEO",
        company: "TechCorp",
        content: "Outstanding web development service. Delivered on time and exceeded expectations.",
        imageUrl: "https://images.unsplash.com/photo-1735825764445-af30f44dc49f",
      },
      {
        name: "Sarah Johnson",
        role: "Marketing Director",
        company: "Digital First",
        content: "Their digital marketing expertise helped us achieve remarkable growth.",
        imageUrl: "https://images.unsplash.com/photo-1735825764451-d2186b7f4bf9",
      },
    ];

    testimonials.forEach(t => this.createTestimonial(t));
  }
}

export const storage = new MemStorage();
