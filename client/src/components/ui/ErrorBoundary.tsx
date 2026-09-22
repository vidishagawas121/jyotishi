import { Component, type ErrorInfo, type ReactNode } from 'react';
import { RefreshCw, Home, MessageCircle, AlertTriangle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in application:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-sand-50 px-4 py-12">
          <div className="mx-auto max-w-lg rounded-2xl border border-gold-200/80 bg-white p-8 text-center shadow-xl md:p-10">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-maroon-50 text-maroon-700 ring-8 ring-maroon-50/50">
              <AlertTriangle className="h-10 w-10 text-maroon-600" />
            </div>

            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-gold-200 bg-gold-50/60 px-3.5 py-1 text-xs font-semibold text-maroon-800">
              <span className="text-gold-600">ॐ</span>
              <span>{siteConfig.brandNameHindi}</span>
            </div>

            <h1 className="mt-3 font-heading text-2xl font-bold text-gray-900 md:text-3xl">
              कुछ तकनीकी त्रुटि हुई है
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
              क्षमा करें, पेज लोड करने में अस्थायी समस्या आई है। कृपया पेज को पुनः रीलोड करें अथवा सीधे हमसे संपर्क करें।
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={this.handleReload}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-maroon-800 to-maroon-900 px-6 py-3 font-semibold text-white shadow-md transition-all hover:from-maroon-900 hover:to-maroon-950 hover:shadow-lg"
              >
                <RefreshCw className="h-4 w-4" />
                <span>पुनः प्रयास करें (Reload)</span>
              </button>

              <button
                type="button"
                onClick={this.handleGoHome}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50"
              >
                <Home className="h-4 w-4" />
                <span>मुख्य पृष्ठ (Home)</span>
              </button>
            </div>

            <div className="mt-6 border-t border-gray-100 pt-6">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp पर सहायता प्राप्त करें</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
