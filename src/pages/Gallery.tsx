import { useState, useEffect } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Only 6 projects with before/after images
  const projects = [
    {
      id: 1,
      beforeImage: "https://firebasestorage.googleapis.com/v0/b/websitesforfree-73cd4.appspot.com/o/GDMio8KW6PfDeX41DLoTy1CX2O92%2FolpvgafasQ1MnqNlyftO%2F539572982-2200419477145927-3599592527632196781-n_1200x10000.webp?alt=media&token=73d5a711-cddb-4c3d-814a-cfc2718c89e3",
      afterImage: "https://firebasestorage.googleapis.com/v0/b/websitesforfree-73cd4.appspot.com/o/GDMio8KW6PfDeX41DLoTy1CX2O92%2FolpvgafasQ1MnqNlyftO%2F540985909-755485127407453-6742971342624068908-n_1200x10000.webp?alt=media&token=c65e35af-8742-4374-a59c-a158c8e39e39",
    },
    {
      id: 2,
      beforeImage: "https://firebasestorage.googleapis.com/v0/b/websitesforfree-73cd4.appspot.com/o/GDMio8KW6PfDeX41DLoTy1CX2O92%2FolpvgafasQ1MnqNlyftO%2F541031979-1170609774943329-90548361335252093-n_1200x10000.webp?alt=media&token=ab4123e8-57a5-4523-9027-a17b17ac04d8",
      afterImage: "https://firebasestorage.googleapis.com/v0/b/websitesforfree-73cd4.appspot.com/o/GDMio8KW6PfDeX41DLoTy1CX2O92%2FolpvgafasQ1MnqNlyftO%2F538654748-1114870620178322-4989270585824161812-n_1200x10000.webp?alt=media&token=24ed0a31-52a0-448f-b6a7-7d7a54b4592b",
    },
    {
      id: 3,
      beforeImage: "https://firebasestorage.googleapis.com/v0/b/websitesforfree-73cd4.appspot.com/o/GDMio8KW6PfDeX41DLoTy1CX2O92%2FolpvgafasQ1MnqNlyftO%2F541168148-1701482777175221-5523900308025989728-n_1200x10000.webp?alt=media&token=013e82c5-9fd3-4882-8e5c-18b762822b9d",
      afterImage: "https://firebasestorage.googleapis.com/v0/b/websitesforfree-73cd4.appspot.com/o/GDMio8KW6PfDeX41DLoTy1CX2O92%2FolpvgafasQ1MnqNlyftO%2F541147030-1881154726036836-7682240793995308125-n_1200x10000.webp?alt=media&token=80527ce7-a939-44ca-8a6b-f3c8f1dc32c1",
    },
    {
      id: 4,
      beforeImage: "https://firebasestorage.googleapis.com/v0/b/websitesforfree-73cd4.appspot.com/o/GDMio8KW6PfDeX41DLoTy1CX2O92%2FolpvgafasQ1MnqNlyftO%2F540270170-1300660251712017-8179899550678250639-n_1200x10000.webp?alt=media&token=2597c6e7-8d77-4dc9-8eb0-4eb2ab1f2ef1",
      afterImage: "https://firebasestorage.googleapis.com/v0/b/websitesforfree-73cd4.appspot.com/o/GDMio8KW6PfDeX41DLoTy1CX2O92%2FolpvgafasQ1MnqNlyftO%2F540999055-2126247707904213-5735737065720060323-n_1200x10000.webp?alt=media&token=525cb143-47f0-48d7-a33e-8b44bebb298a",
    },
    {
      id: 5,
      beforeImage: "https://firebasestorage.googleapis.com/v0/b/websitesforfree-73cd4.appspot.com/o/GDMio8KW6PfDeX41DLoTy1CX2O92%2FolpvgafasQ1MnqNlyftO%2F539273251-24475095372110088-7626346267831968683-n_1200x10000.webp?alt=media&token=92f077d7-a5f9-43e8-b3e8-9e687ffb78b8",
      afterImage: "https://firebasestorage.googleapis.com/v0/b/websitesforfree-73cd4.appspot.com/o/GDMio8KW6PfDeX41DLoTy1CX2O92%2FolpvgafasQ1MnqNlyftO%2F541035076-759229690149082-2678867572543944392-n_1200x10000.webp?alt=media&token=1174dfa5-1741-4d4a-bdd1-5e6dc534c504",
    },
    {
      id: 6,
      beforeImage: "https://firebasestorage.googleapis.com/v0/b/websitesforfree-73cd4.appspot.com/o/GDMio8KW6PfDeX41DLoTy1CX2O92%2FolpvgafasQ1MnqNlyftO%2F434688254-1867438637017523-4537439103727211586-n_1200x10000.webp?alt=media&token=88bef757-2a52-42ff-8d70-a9aa40725c04",
      afterImage: "https://firebasestorage.googleapis.com/v0/b/websitesforfree-73cd4.appspot.com/o/GDMio8KW6PfDeX41DLoTy1CX2O92%2FolpvgafasQ1MnqNlyftO%2F434732687-1109706607012528-4613501859183870510-n_1200x10000.webp?alt=media&token=1bdf1283-7f25-48d4-a0c8-59bd2e809f47",
    },
  ];

  const openLightbox = (projectIndex, imageType) => {
    setCurrentProjectIndex(projectIndex);
    setCurrentImageIndex(imageType === 'before' ? 0 : 1);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateImage = (direction) => {
    if (direction === 'next') {
      setCurrentImageIndex((currentImageIndex + 1) % 2);
    } else {
      setCurrentImageIndex(currentImageIndex === 0 ? 1 : 0);
    }
  };

  const navigateProject = (direction) => {
    if (direction === 'next') {
      setCurrentProjectIndex((currentProjectIndex + 1) % projects.length);
    } else {
      setCurrentProjectIndex(currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1);
    }
    setCurrentImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <main className="pt-20">
          {/* Gallery Grid - Only 6 Projects */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => openLightbox(index, 'before')}>
                    <div className="grid grid-cols-2">
                      <div className="relative">
                        <img 
                          src={project.beforeImage} 
                          alt="Before" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                          BEFORE
                        </div>
                      </div>
                      <div className="relative">
                        <img 
                          src={project.afterImage} 
                          alt="After" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                          AFTER
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={currentImageIndex === 0 ? projects[currentProjectIndex].beforeImage : projects[currentProjectIndex].afterImage} 
                alt={currentImageIndex === 0 ? "Before" : "After"} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                {currentImageIndex === 0 ? "BEFORE" : "AFTER"}
              </div>
              <button 
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </button>
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                onClick={() => navigateImage('prev')}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                onClick={() => navigateImage('next')}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <button 
                className="absolute left-1/2 bottom-4 -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                onClick={() => navigateProject('prev')}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                className="absolute left-1/2 bottom-4 translate-x-12 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                onClick={() => navigateProject('next')}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;