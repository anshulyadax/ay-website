import {
  type Inquiry,
  type InsertInquiry,
  type Project,
  type InsertProject,
  type Testimonial,
  type InsertTestimonial,
  type BlogPost,
  type InsertBlogPost,
  type PricingPackage,
  type InsertPricingPackage,
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

  // Blog Posts
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getBlogPostsByCategory(category: string): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;

  // Pricing Packages
  getPricingPackages(): Promise<PricingPackage[]>;
  createPricingPackage(pkg: InsertPricingPackage): Promise<PricingPackage>;
}

export class MemStorage implements IStorage {
  private inquiries: Map<number, Inquiry>;
  private projects: Map<number, Project>;
  private testimonials: Map<number, Testimonial>;
  private blogPosts: Map<number, BlogPost>;
  private pricingPackages: Map<number, PricingPackage>;
  private currentIds: { [key: string]: number };

  constructor() {
    this.inquiries = new Map();
    this.projects = new Map();
    this.testimonials = new Map();
    this.blogPosts = new Map();
    this.pricingPackages = new Map();
    this.currentIds = {
      inquiries: 1,
      projects: 1,
      testimonials: 1,
      blogPosts: 1,
      pricingPackages: 1,
    };

    // Add sample data
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
    return Array.from(this.projects.values()).filter(p => p.featured === true);
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(
      p => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentIds.projects++;
    const project: Project = { 
      ...insertProject, 
      id,
      featured: insertProject.featured ?? false
    };
    this.projects.set(id, project);
    return project;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentIds.testimonials++;
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id,
      imageUrl: insertTestimonial.imageUrl ?? null
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug
    );
  }

  async getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).filter(
      (post) => post.category.toLowerCase() === category.toLowerCase()
    );
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentIds.blogPosts++;
    const post: BlogPost = {
      ...insertPost,
      id,
      imageUrl: insertPost.imageUrl ?? null,
      createdAt: new Date(),
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getPricingPackages(): Promise<PricingPackage[]> {
    return Array.from(this.pricingPackages.values());
  }

  async createPricingPackage(insertPkg: InsertPricingPackage): Promise<PricingPackage> {
    const id = this.currentIds.pricingPackages++;
    const pkg: PricingPackage = { 
      ...insertPkg, 
      id,
      recommended: insertPkg.recommended ?? false
    };
    this.pricingPackages.set(id, pkg);
    return pkg;
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

    // Sample blog posts
    const blogPosts: InsertBlogPost[] = [
      {
        title: "The Future of Web Development",
        slug: "future-of-web-development",
        content: "Detailed content about modern web development trends...",
        excerpt: "Explore the latest trends shaping the future of web development.",
        category: "Web Development",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      },
      {
        title: "Cloud Computing Essentials",
        slug: "cloud-computing-essentials",
        content: "Comprehensive guide to cloud computing...",
        excerpt: "Learn the fundamentals of cloud computing and its benefits.",
        category: "Cloud Services",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      },
    ];

    // Sample pricing packages
    const pricingPackages: InsertPricingPackage[] = [
      {
        name: "Starter",
        description: "Perfect for small businesses",
        price: 999,
        features: [
          "Basic website design",
          "5 pages",
          "Contact form",
          "Mobile responsive",
        ],
        recommended: false,
      },
      {
        name: "Professional",
        description: "Most popular choice for growing businesses",
        price: 2499,
        features: [
          "Custom website design",
          "10 pages",
          "Advanced features",
          "SEO optimization",
          "Social media integration",
        ],
        recommended: true,
      },
      {
        name: "Enterprise",
        description: "Full-service solution for large businesses",
        price: 4999,
        features: [
          "Advanced custom design",
          "Unlimited pages",
          "E-commerce functionality",
          "Advanced analytics",
          "Priority support",
        ],
        recommended: false,
      },
    ];

    projects.forEach(p => this.createProject(p));
    blogPosts.forEach(p => this.createBlogPost(p));
    pricingPackages.forEach(p => this.createPricingPackage(p));

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