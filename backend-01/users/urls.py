from wagtail.api.v2.router import WagtailAPIRouter
from wagtail.api.v2.views import PagesAPIViewSet
from wagtail.documents.api.v2.views import DocumentsAPIViewSet
from wagtail.images.api.v2.views import ImagesAPIViewSet


cms_api_router = WagtailAPIRouter("wagtailapi")
cms_api_router.register_endpoint("pages", PagesAPIViewSet)
cms_api_router.register_endpoint("images", ImagesAPIViewSet)
cms_api_router.register_endpoint("documents", DocumentsAPIViewSet)
