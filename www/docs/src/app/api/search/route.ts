import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define types for content items
interface ContentItem {
  id: string;
  title: string;
  description?: string;
  href: string;
  section: string;
  content: string;
}

// Get all MDX files recursively
function getAllMdxFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllMdxFiles(path.join(dirPath, file), arrayOfFiles);
    } else if (file.endsWith('.mdx')) {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

// Extract text content from MDX
function extractTextFromMdx(content: string): string {
  // Remove frontmatter if present
  const frontmatterRemoved = content.replace(/^---[\s\S]*?---/, '');
  
  // Remove MDX syntax like imports and components, keep text content
  const textOnly = frontmatterRemoved
    .replace(/import\s+.*?from\s+['"][^'"]*['"];?/g, '') // Remove imports
    .replace(/{.*?}/g, '') // Remove JSX expressions
    .replace(/<.*?>/g, '') // Remove JSX tags
    .replace(/[#*~`[\]]/g, '') // Remove markdown syntax
    .replace(/\[(.*?)\]\(.*?\)/g, '$1'); // Remove markdown links, keep text

  return textOnly.trim();
}

export async function GET(request: NextRequest) {
  try {
    // Server-side code - scan files
    const docsPath = path.join(process.cwd(), 'src', 'app', '(docs)');
    const mdxFiles = getAllMdxFiles(docsPath);
    
    const contentItems: ContentItem[] = [];
    
    for (const filePath of mdxFiles) {
      const relativePath = path.relative(docsPath, filePath);
      const href = '/' + relativePath
        .replace(/\\/g, '/') // Convert Windows paths to POSIX
        .replace(/\/page\\.mdx$/, '') // Remove /page.mdx
        .replace(/\/index\\.mdx$/, '') // Remove /index.mdx
        .replace(/\\.mdx$/, ''); // Remove .mdx extension
      
      // Extract section from path
      const section = relativePath.split('/')[0] || '';
      
      // Read file content
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Try to extract title and description from frontmatter
      let title = 'Untitled';
      let description = '';
      
      // Simple frontmatter extraction
      const frontmatterMatch = content.match(/^---\\n([\s\S]*?)\\n---/);
      if (frontmatterMatch) {
        const frontmatterContent = frontmatterMatch[1];
        const fm: Record<string, string> = {};
        frontmatterContent.split('\\n').forEach(line => {
          const [key, ...valueParts] = line.split(': ');
          if (key && valueParts.length) {
            const value = valueParts.join(': ').trim().replace(/^[\"']|[\"']\\$/g, '');
            fm[key.trim()] = value;
          }
        });
        
        title = fm['title'] || title;
        description = fm['description'] || description;
      } else {
        // If no frontmatter, try to extract title from first H1
        const h1Match = content.match(/^#\\s+(.*)/m);
        if (h1Match) {
          title = h1Match[1];
        }
      }
      
      // Extract text content for search
      const textContent = extractTextFromMdx(content);
      
      contentItems.push({
        id: href,
        title,
        description,
        href,
        section,
        content: textContent
      });
    }
    
    return new Response(JSON.stringify(contentItems), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching content:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
